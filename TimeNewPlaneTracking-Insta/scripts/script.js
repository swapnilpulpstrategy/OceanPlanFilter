/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');
const Random = require('Random');
const Time = require('Time');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To access scene objects
var garbageNullObject = Scene.root.find('garbageNullObject');
var scoreObjectRef = Scene.root.find('score');
var timerObjectRef = Scene.root.find('timer');
var gameOverFinalScoreRef = Scene.root.find('scoreGameOver');

// Get Patches Value
var objectTapTrigger = Patches.getBooleanValue('objectTapTrigger');
var scoreValtoScript = Patches.getScalarValue('score');

scoreObjectRef.text = scoreValtoScript.toString();
gameOverFinalScoreRef.text = scoreValtoScript.toString();

//Initial values setup
var initialTimeSecond = 0;
var intervalTime;
timerObjectRef.text = "0";

//start & reset time
var z = 0;
const timeStop = true; 

objectTapTrigger.monitor().subscribe(function (e) 
{
  if (z == 0)
  {
    startIntervalTimer();
    z = 1;
  }
  const randomNum = Random.random();
  const randomNumGreaterVal = randomNum * 10;
  const garbageObjectRef = garbageNullObject.transform;
  
  if (randomNumGreaterVal > 0 && randomNumGreaterVal < 1)
  {
     garbageObjectRef.x = 20;
     garbageObjectRef.y = 90;
  }
  else if (randomNumGreaterVal > 1 && randomNumGreaterVal < 2)
  {
    garbageObjectRef.x = 100;
    garbageObjectRef.y = 20;
  }
  else if (randomNumGreaterVal > 2 && randomNumGreaterVal < 3)
  {
    garbageObjectRef.x = -120;
    garbageObjectRef.y = -20;
  }
  else if (randomNumGreaterVal > 3 && randomNumGreaterVal < 4)
  {
    garbageObjectRef.x = 60;
    garbageObjectRef.y = 120;
  }
  else if (randomNumGreaterVal > 4 && randomNumGreaterVal < 5)
  {
    garbageObjectRef.x = 180;
    garbageObjectRef.y = 70;
  }
  else if (randomNumGreaterVal > 5 && randomNumGreaterVal < 6)
  {
    garbageObjectRef.x = -30;
    garbageObjectRef.y = 30;
  }
  else if (randomNumGreaterVal > 6 && randomNumGreaterVal < 7)
  {
    garbageObjectRef.x = 30;
    garbageObjectRef.y = 130;
  }
  else if (randomNumGreaterVal > 7 && randomNumGreaterVal < 8)
  {
    garbageObjectRef.x = -90;
    garbageObjectRef.y = 60;
  }
  else
  {
    garbageObjectRef.x = 140;
    garbageObjectRef.y = 100;
  }
});

// ----------------- Time Function ------------------------ //
function startIntervalTimer()
{
  intervalTime = Time.setInterval(timeInMinuteSecond, 1000);
}

function timeInMinuteSecond()
{
   if (initialTimeSecond > 29)
   {
       initialTimeSecond = -1;
       stopIntervalTimer();
   }
   else
   {
     initialTimeSecond = initialTimeSecond + 1;
    //  if (initialTimeSecond > 9)
    //  {
    //    timerObjectRef.text = "0" + initialTimeSecond
    //  }
    //  else
    //  {
      timerObjectRef.text = initialTimeSecond.toString()
    //  }
   }
}

function stopIntervalTimer()
{
  // Send the boolean to the Patch Editor under the name 'myBoolean'
  Patches.setBooleanValue('timerStopTrigger', timeStop);
  Time.clearInterval(intervalTime);
}

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');


