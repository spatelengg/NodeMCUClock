
#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <ArduinoJson.h>
#include <DS3231_Simple.h>
#include <Adafruit_NeoPixel.h>
  

const short colorCount = 20;

struct Config {
  bool brightnessAuto;
  int sensorValueRange[4];
  int brightnessValueRange[4];
  int boxBrightnessValueRange[4];
  int brightnessValue;
  int boxBrightnessValue;
  bool boxBlink;
  
  bool colorModeRandom;
  uint32_t colors[colorCount];  
  uint32_t colorSelection[2];
  uint32_t boxColor;

  Config(): brightnessAuto(true)
          , sensorValueRange{0,200,700,1000}
          , brightnessValueRange{10,50,150,200}
          , boxBrightnessValueRange{10,50,150,200}
          , brightnessValue(50)
          , boxBrightnessValue(50)
          , boxBlink(true)
          , colorModeRandom(true)
          , boxColor(0xFFF1E6)
          , colorSelection{0xFF0000,0x00FF00}
          , colors{
                   0xFF0000   //0   Pure Red      
                  ,0x00FF00   //1   Pure Green    
                  ,0x0000FF   //2   Pure Blue
                  ,0xFFFFFF   //3   White
                  ,0xFFFF00   //4   Yellow
                  ,0x00FFFF   //5   Aqua
                  ,0xFFA500   //6   Orange
                  ,0xFF3A40   //7
                  ,0xFF1E76   //8
                  ,0xFF00FF   //9
                  ,0xFB4A21   //10
                  ,0xFCF133   //11
                  ,0x69FF46   //12 Neon green
                  ,0x3A90E5   //13 Neon Blue 
                  ,0xFF6731   //14 Orange
                  ,0xFFCD00   //15 Yellow
                  
                  ,0x69FF46   //16 Neon green
                  ,0x3A90E5   //17 Neon Blue 
                  ,0xFF6731   //18 Orange
                  ,0xFFCD00   //19 Yellow
                  }
          {}
};



 
MDNSResponder mdns;

// Replace with your network credentials
const char* ssid = "Sonic";
const char* password = "987654321";

ESP8266WebServer server(80);

String webPage = "";

 

const char* PARAM_INPUT_1 = "input1";
Config _cfg;
DS3231_Simple Clock;
DateTime MyDateAndTime;
 

// Which pin on the Arduino is connected to the NeoPixels?
#define LEDCLOCK_PIN        D8
#define LEDDOWNLIGHT_PIN    D6
#define ledPerSegment       10
 
// How many NeoPixels are attached to the Arduino?
#define LEDCLOCK_COUNT 230  // This should be = 23 * ledPerSegment
#define LEDDOWNLIGHT_COUNT 12

Adafruit_NeoPixel stripClock      (LEDCLOCK_COUNT    , LEDCLOCK_PIN,      NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel stripDownlighter(LEDDOWNLIGHT_COUNT, LEDDOWNLIGHT_PIN,  NEO_GRB + NEO_KHZ800);
 
//Smoothing of the readings from the light sensor so it is not too twitchy
const short numReadings = 12;

short readings[numReadings];      // the readings from the analog input
short readIndex = 0;              // the index of the current reading
int total = 0;                  // the running total
int avgSensorValue = 0;                // the average
int currentSensorValue = 0;
 


void setup(void){ 
  delay(1000);
  Serial.begin(115200);
    
  webPage = "<!doctype html><html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n<link rel=\"stylesheet\" href=\"http://192.168.29.45:8080/Style.css\" />\n\n"; 
  webPage += "<script src=\"https://code.jquery.com/jquery-3.6.4.min.js\"></script>\n<script src=\"http://192.168.29.45:8080/Script.js\"></script>\n\n";
  webPage += "</head><body></body></html>";
   
  

  WiFi.begin(ssid, password);
  Serial.println("1");

  // Wait for connection
  
  
  server.on("/", [](){
    server.send(200, "text/html", webPage);
  });

  server.on("/getDetails", [](){
    server.send(200, "application/json", getConfigJson());
  });

  server.on("/setTime", [](){
    //Set clock time    
    String response = "";
    if(server.hasArg("year")){
      
      MyDateAndTime.Year = server.arg("year").toInt();
      MyDateAndTime.Month = server.arg("month").toInt();
      MyDateAndTime.Day = server.arg("day").toInt();
      MyDateAndTime.Hour = server.arg("hour").toInt();
      MyDateAndTime.Minute = server.arg("min").toInt();
      MyDateAndTime.Second = server.arg("sec").toInt();

      String date = String(MyDateAndTime.Year) + "/" + String(MyDateAndTime.Month) + "/" + String(MyDateAndTime.Day);
      String timeV = String(MyDateAndTime.Hour) + ":" + String(MyDateAndTime.Minute) + ":" + String(MyDateAndTime.Second);
      Serial.println("DateTime is: " + date + " " + timeV ); 
      
      Clock.write(MyDateAndTime);

      response = "Time is set. to " + String(MyDateAndTime.Year);
    }
    else{
      response = "Time parameter missing!";
    }

   
    server.send(200, "text/html", response);
 });

  server.on("/setColors", [](){
    
    String response = "";
    if(server.hasArg("cmr")){
      _cfg.colorModeRandom = server.arg("cmr") == "true";
      _cfg.colorSelection[0] = (long)(server.arg("cs0").toInt());
      _cfg.colorSelection[1] = (long)(server.arg("cs1").toInt());
      _cfg.boxColor = (long)(server.arg("bc").toInt());
      for(int i=0;i<colorCount; i++){
        Serial.print(String(_cfg.colors[i] ) + " -> ");        
        _cfg.colors[i] = (long)(server.arg("c" + String(i)).toInt());
        Serial.println(String(_cfg.colors[i] ));         
      }
       
      response = "Color config set";
    }
    else{
      response = "Color parameters missing!";
    }
       
    server.send(200, "text/html", response);
    
  });

  server.on("/setBrightness",[](){
    
    String response = "";
    if(server.hasArg("ba")){
      _cfg.brightnessAuto = server.arg("ba") == "true";
      _cfg.brightnessValue = server.arg("bv").toInt();
      _cfg.boxBrightnessValue = server.arg("bbv").toInt();
      _cfg.boxBlink = server.arg("bb") == "true";
      for(int i=0;i<4; i++){               
        _cfg.sensorValueRange[i] = (long)(server.arg("svr" + String(i)).toInt());
        _cfg.brightnessValueRange[i] = (long)(server.arg("bvr" + String(i)).toInt());
        _cfg.boxBrightnessValueRange[i] = (long)(server.arg("bbvr" + String(i)).toInt());
      }
      
      response = "Brightness config set";
    }
    else{
      response = "Brightness parameters missing!";
    }
 
       
    server.send(200, "text/html", response);
     
  });

  server.on("/saveConfig", [](){
    Serial.println("value to memory: " + String(_cfg.brightnessValue));
    //TODO : set value to EEPROM
    
    server.send(200, "text/html", "Conig saved");
    delay(1000);
  });
  
  server.begin();
  Serial.println("HTTP server started");

  //smoothing
  // initialize all the readings to 0:
  for (int thisReading = 0; thisReading < numReadings; thisReading++) {
    readings[thisReading] = 0;
  }
   
  Clock.begin();
  stripClock.begin();
  stripClock.show();
  stripClock.setBrightness(10);
  
  stripDownlighter.begin();
  stripDownlighter.show();
  stripDownlighter.setBrightness(10); 
  
}
 

bool wifiConnected = false; 

void loop(void){
  checkWiFiStatus();
  if(wifiConnected) {  
    server.handleClient();
  }

  // Ask the clock for the data.
  MyDateAndTime = Clock.read();
  //String date = String(MyDateAndTime.Year) + "/" + String(MyDateAndTime.Month) + "/" + String(MyDateAndTime.Day);
  //String timeV = String(MyDateAndTime.Hour) + ":" + String(MyDateAndTime.Minute) + ":" + String(MyDateAndTime.Second);
  //Serial.println("DateTime is: " + date + " " + timeV ); 
  
  setClockColors();
  setBrightness();
  displayTheTime();
  displayBoxLight();
  
  //delay(500);
} 
 

void setBrightness(){
  if(_cfg.brightnessAuto){
    total -= readings[readIndex];
    //Record a reading from the light sensor and add it to the array
     
    //currentSensorValue = 50;
    currentSensorValue = 1024 - analogRead(A0); //get an average light level from previouse set of samples
    if(currentSensorValue == 0){
      currentSensorValue  = 1;
    }
    readings[readIndex] = currentSensorValue;
    total += readings[readIndex];
    
    //Serial.println(readings[readIndex]);
    readIndex = readIndex + 1; // advance to the next position in the array:
    
    // if we're at the end of the array move the index back around...
    if (readIndex >= numReadings) {
      // ...wrap around to the beginning:
      readIndex = 0;
    }
    avgSensorValue = total/numReadings;
    if(avgSensorValue <= _cfg.sensorValueRange[1]){
      _cfg.brightnessValue = map(avgSensorValue, _cfg.sensorValueRange[0], _cfg.sensorValueRange[1], _cfg.brightnessValueRange[0], _cfg.brightnessValueRange[1]);     
      _cfg.boxBrightnessValue = map(avgSensorValue, _cfg.sensorValueRange[0], _cfg.sensorValueRange[1], _cfg.boxBrightnessValueRange[0], _cfg.boxBrightnessValueRange[1]); 
    }
    else if(avgSensorValue < _cfg.sensorValueRange[2]){
      _cfg.brightnessValue = map(avgSensorValue, _cfg.sensorValueRange[1], _cfg.sensorValueRange[2], _cfg.brightnessValueRange[1], _cfg.brightnessValueRange[2]);     
      _cfg.boxBrightnessValue = map(avgSensorValue, _cfg.sensorValueRange[1], _cfg.sensorValueRange[2], _cfg.boxBrightnessValueRange[1], _cfg.boxBrightnessValueRange[2]); 
    } 
    else {
      _cfg.brightnessValue = map(avgSensorValue, _cfg.sensorValueRange[2], _cfg.sensorValueRange[3], _cfg.brightnessValueRange[2], _cfg.brightnessValueRange[3]);     
      _cfg.boxBrightnessValue = map(avgSensorValue, _cfg.sensorValueRange[2], _cfg.sensorValueRange[3], _cfg.boxBrightnessValueRange[2], _cfg.boxBrightnessValueRange[3]); 
    }        
  }
  
  //Serial.print("Sensor Value: Raw=" + String(currentSensorValue) + " Avg=" + String(avgSensorValue));
  //Serial.println(" | Bright=" + String(_cfg.brightnessValue) + " Box=" + String(_cfg.boxBrightnessValue));  
}

void displayBoxLight(){
  stripDownlighter.clear();
  if(_cfg.boxBlink && MyDateAndTime.Second % 2 == 0 ){
    stripDownlighter.fill(_cfg.boxColor, 0, 2);
    stripDownlighter.fill(_cfg.boxColor, 3, 6);
    stripDownlighter.fill(_cfg.boxColor, 10, 2);        
  }
  else{
    stripDownlighter.fill(_cfg.boxColor, 0, LEDDOWNLIGHT_COUNT);     
  }
  stripDownlighter.setBrightness(_cfg.boxBrightnessValue);
  stripDownlighter.show();  
}

void displayTheTime(){
  int firstMinuteDigit = MyDateAndTime.Minute % 10; //work out the value of the first digit and then display it
  int secondMinuteDigit = floor(MyDateAndTime.Minute / 10); //work out the value for the second digit and then display it
  int firstHourDigit = MyDateAndTime.Hour; //work out the value for the third digit and then display it
  
  if(firstHourDigit == 0) {
    firstHourDigit = 12;
  }
  if (firstHourDigit > 12){
    firstHourDigit = firstHourDigit - 12;
  }
 
  firstHourDigit = firstHourDigit % 10;
  
  int secondHourDigit = MyDateAndTime.Hour; //work out the value for the fourth digit and then display it
  if (secondHourDigit == 0){
    secondHourDigit = 12;
  }
  if (secondHourDigit > 12){
    secondHourDigit = secondHourDigit - 12;
  }

  stripClock.clear(); //clear the clock face 
  displayNumber(firstMinuteDigit, 0, _cfg.colorSelection[1]);
  displayNumber(secondMinuteDigit, ledPerSegment * 7, _cfg.colorSelection[1]);  
  displayNumber(firstHourDigit, ledPerSegment * 14, _cfg.colorSelection[0]);  
  if (secondHourDigit > 9){
    secondHourDigit = 1;
      stripClock.fill(_cfg.colorSelection[0],ledPerSegment * 21, ledPerSegment * 2); 
  }
  else{
    secondHourDigit = 0;
  }
  stripClock.setBrightness(_cfg.brightnessValue);
  stripClock.show(); 

  //Serial.println( String(secondHourDigit) + String(firstHourDigit) + ":" + String(secondMinuteDigit) + String(firstMinuteDigit)) ;
}

int colorSetAt = 0; 
void setClockColors(){
  int minCounter = MyDateAndTime.Minute / 5;
    if(_cfg.colorModeRandom && colorSetAt != minCounter){
      _cfg.colorSelection[0] = _cfg.colors[random(0, colorCount)];
      _cfg.colorSelection[1] = _cfg.colors[random(0, colorCount)];
      colorSetAt = minCounter;
    }
}

void checkWiFiStatus(){
  if(wifiConnected)
    return;

  wifiConnected = (WiFi.status() == WL_CONNECTED);
  if(wifiConnected == true) {
    
    Serial.print("Connected to ");
    Serial.println(ssid);
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
 
    if (mdns.begin("esp8266", WiFi.localIP())) {
      Serial.println("MDNS responder started");
    }
  }  
  else{
    Serial.println(".");
    delay(100);
  }
}

 
 
String getConfigJson(){
  DynamicJsonDocument doc(1024);
 String retVal;
  doc["ba"] = _cfg.brightnessAuto;
  for(int i = 0; i<4;i++){
    doc["svr"][i] = _cfg.sensorValueRange[i];
    doc["bvr"][i] = _cfg.brightnessValueRange[i];
    doc["bbvr"][i] = _cfg.boxBrightnessValueRange[i];
  }
  doc["bv"] = _cfg.brightnessValue;
  doc["bbv"] = _cfg.boxBrightnessValue;
  doc["bb"] = _cfg.boxBlink;
  doc["cmr"] = _cfg.colorModeRandom;
  doc["bc"] = _cfg.boxColor;

  for(int i = 0; i<colorCount;i++){
    doc["c"][i] = _cfg.colors[i];    
  }
  doc["cs"][0] = _cfg.colorSelection[0];
  doc["cs"][1] = _cfg.colorSelection[1];

  String date = "20" + String(MyDateAndTime.Year) + "-" + String(MyDateAndTime.Month) + "-" + String(MyDateAndTime.Day);
  String timeV = String(MyDateAndTime.Hour) + ":" + String(MyDateAndTime.Minute);
  doc["ct"] = date + 'T' + timeV;

  doc["rsv"] = currentSensorValue;
  doc["asv"] = avgSensorValue;
  
  serializeJson(doc, retVal);  
  // String retVal = "{" ;
  // retVal += "\"brightnessAuto\":" + String(_cfg.brightnessAuto);
  // retVal += "\"brightnessAuto\":" + String(_cfg.brightnessAuto);
  // retVal += "}";

  return retVal;
}


void displayNumber(int digitToDisplay, int offsetBy, uint32_t colourToUse){
    switch (digitToDisplay){
    case 0:
    digitZero(offsetBy,colourToUse, ledPerSegment);
      break;
    case 1:
      digitOne(offsetBy,colourToUse, ledPerSegment);
      break;
    case 2:
    digitTwo(offsetBy,colourToUse, ledPerSegment);
      break;
    case 3:
    digitThree(offsetBy,colourToUse, ledPerSegment);
      break;
    case 4:
    digitFour(offsetBy,colourToUse, ledPerSegment);
      break;
    case 5:
    digitFive(offsetBy,colourToUse, ledPerSegment);
      break;
    case 6:
    digitSix(offsetBy,colourToUse, ledPerSegment);
      break;
    case 7:
    digitSeven(offsetBy,colourToUse, ledPerSegment);
      break;
    case 8:
    digitEight(offsetBy,colourToUse, ledPerSegment);
      break;
    case 9:
    digitNine(offsetBy,colourToUse, ledPerSegment);
      break;
    default:
     break;
  }
}

void digitZero(int offset, uint32_t colour, int ledPerLine){
    stripClock.fill(colour, (0 + offset), ledPerLine * 3);
    stripClock.fill(colour, (ledPerLine * 4 + offset), ledPerLine * 3);
}

void digitOne(int offset, uint32_t colour, int ledPerLine){
    stripClock.fill(colour,  offset, ledPerLine);
    stripClock.fill(colour, (ledPerLine * 4 + offset), ledPerLine);
}

void digitTwo(int offset, uint32_t colour, int ledPerLine){
    stripClock.fill(colour, (0 + offset), ledPerLine * 2);
    stripClock.fill(colour, (ledPerLine * 3 + offset), ledPerLine);
    stripClock.fill(colour, (ledPerLine * 5 + offset), ledPerLine * 2);
}

void digitThree(int offset, uint32_t colour, int ledPerLine){
    stripClock.fill(colour, offset, ledPerLine * 2);
    stripClock.fill(colour, (ledPerLine* 3 + offset), ledPerLine * 3);
}

void digitFour(int offset, uint32_t colour, int ledPerLine){
    stripClock.fill(colour, offset, ledPerLine);
    stripClock.fill(colour, (ledPerLine * 2 + offset), ledPerLine * 3);
}

void digitFive(int offset, uint32_t colour, int ledPerLine){
    stripClock.fill(colour, (ledPerLine + offset), ledPerLine * 5);
}

void digitSix(int offset, uint32_t colour, int ledPerLine){
    stripClock.fill(colour, (ledPerLine + offset), ledPerLine * 6);
}

void digitSeven(int offset, uint32_t colour, int ledPerLine){
    stripClock.fill(colour, offset, ledPerLine * 2);
    stripClock.fill(colour, (ledPerLine * 4 + offset), ledPerLine);
}

void digitEight(int offset, uint32_t colour, int ledPerLine){
    stripClock.fill(colour, offset, ledPerLine * 7);
}

void digitNine(int offset, uint32_t colour, int ledPerLine){
    stripClock.fill(colour, offset, ledPerLine * 6);
}
 
