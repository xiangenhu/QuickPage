function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GHFAJeolTG":
        Script1();
        break;
      case "5Y0ZkoYnBtG":
        Script2();
        break;
      case "6hbAxl8l7S4":
        Script3();
        break;
      case "6L8uxVT6xp3":
        Script4();
        break;
      case "6ZGhMGyT7DH":
        Script5();
        break;
      case "6ftrXo6PTVt":
        Script6();
        break;
      case "5nu4IpF6IdO":
        Script7();
        break;
  }
}

function Script1()
{
  var p = GetPlayer();

/* analysis */

var ana1 = p.GetVar("WhichisAppropriate7");
var ana2 = p.GetVar("WhichisAppropriate8");
var ana3 = p.GetVar("WhichisAppropriate9");
var ana4 = p.GetVar("WhichisAppropriate10");

/* design */
var des1_1 = p.GetVar("trainingmethod_1");
var des1_2 = p.GetVar("trainingmethod_2");
var des1_3 = p.GetVar("trainingmethod_3");
var des1_4 = p.GetVar("trainingmethod_4");
var des2 = p.GetVar("TextEntry5");
var des3 = p.GetVar("TextEntry6");
var des4 = p.GetVar("TextEntry7");
var des5_1 = p.GetVar("instructionalmethod_1");
var des5_2 = p.GetVar("instructionalmethod_2");
var des5_3 = p.GetVar("instructionalmethod_3");
var des5_4 = p.GetVar("instructionalmethod_4");
var des6 = p.GetVar("ActivateLearners2");
var des7 = p.GetVar("WhichisAppropriate2");
var des8 = p.GetVar("WhichisAppropriate3");
var des9 = p.GetVar("WhichisAppropriate4");
var des10 = p.GetVar("WhichisAppropriate5");
var des11 = p.GetVar("WhichisAppropriate6");

/* development */

var dev1 = p.GetVar("WhichisAppropriate1");
var dev2 = p.GetVar("ActivateLearners3");

/* implementation */

var imp1 = p.GetVar("WhichisAppropriate");
var imp2 = p.GetVar("ActivateLearners");

/* evaluation */

var eva1 = p.GetVar("TextEntry42");
var eva2 = p.GetVar("TextEntry41");
var eva3 = p.GetVar("TextEntry43");
var eva4 = p.GetVar("TextEntry44");
var eva5 = p.GetVar("TextEntry45");
var eva6 = p.GetVar("TextEntry46");

printFrame = document.createElement("iframe");
printFrame.style.position = "absolute";
printFrame.style.top = 0 + "px"; 
printFrame.style.fontFamily = "Arial,sans-serif";
document.body.appendChild(printFrame);

printFrame.contentWindow.document.write('<h2>ADL course plan</h2>');

/* analysis */

printFrame.contentWindow.document.write('<h3>1. ANALYSIS</h3>');

printFrame.contentWindow.document.write('<h4>Identify and define the target audience</h4>');
printFrame.contentWindow.document.write('<p>'+ana1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define performance objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define learning objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Conduct a training strategy analysis</h4>');
printFrame.contentWindow.document.write('<p>'+ana4.replace(/\n/g, "<br/>")+'</p>');

/* design */

printFrame.contentWindow.document.write('<h3>2. DESIGN</h3>');

printFrame.contentWindow.document.write('<h4>Which training method are you going to use?</h4>');
printFrame.contentWindow.document.write('<p>'+des1_1+" "+des1_2+" "+des1_3+" "+des1_4+'</p>');

printFrame.contentWindow.document.write('<h4>How are you going to activate your learners?</h4>');

printFrame.contentWindow.document.write('<h5>1. Interaction with the teacher (tutoring, feedback, motivating…)</h5>');
printFrame.contentWindow.document.write('<p>'+des2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>2. Interaction with content (quizzes, questions…)</h5>');
printFrame.contentWindow.document.write('<p>'+des3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>3. Interaction with peers (teamwork, peer review, discussion)</h5>');
printFrame.contentWindow.document.write('<p>'+des4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Which are appropriate instructional methods for your course?</h5>');
printFrame.contentWindow.document.write('<p>'+des5_1+" "+des5_2+" "+des5_3+" "+des5_4+'</p>');

printFrame.contentWindow.document.write('<h5>Which SME would help in the creation of the examples, scenarios, quizzes?</h5>');
printFrame.contentWindow.document.write('<p>'+des6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which are the best media elements for your course? Write down your ideas.</h4>');

printFrame.contentWindow.document.write('<h5>Text / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des7.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Pictures / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des8.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Videos / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des9.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Audio / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des10.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Graphs / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des11.replace(/\n/g, "<br/>")+'</p>');

/* Development */

printFrame.contentWindow.document.write('<h3>3. DEVELOPMENT</h3>');

printFrame.contentWindow.document.write('<h4>Which roles and knowledge are needed for the design and development of the course? Who would be the right persons in your organization?</h4>');
printFrame.contentWindow.document.write('<p>'+dev1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>How will the testing be handled?</h4>');
printFrame.contentWindow.document.write('<p>'+dev2.replace(/\n/g, "<br/>")+'</p>');

/* Implementation */

printFrame.contentWindow.document.write('<h3>4. IMPLEMENTATION</h3>');

printFrame.contentWindow.document.write('<h4>To whom is the course available? What kind of administration is needed?</h4>');
printFrame.contentWindow.document.write('<p>'+imp1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which elements of LMS are you going to use in the course (e.g. tests, exercises, chat forums?)</h4>');
printFrame.contentWindow.document.write('<p>'+imp2.replace(/\n/g, "<br/>")+'</p>');

/* evaluation */

printFrame.contentWindow.document.write('<h3>5. EVALUATION</h3>');

printFrame.contentWindow.document.write('<h4>Surveys & Polls</h4>');
printFrame.contentWindow.document.write('<p>'+eva1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Online questionnaires</h4>');
printFrame.contentWindow.document.write('<p>'+eva3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Interviews</h4>');
printFrame.contentWindow.document.write('<p>'+eva5.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.print()
document.body.removeChild(printFrame);
}

function Script2()
{
  var p = GetPlayer();

/* analysis */

var ana1 = p.GetVar("WhichisAppropriate7");
var ana2 = p.GetVar("WhichisAppropriate8");
var ana3 = p.GetVar("WhichisAppropriate9");
var ana4 = p.GetVar("WhichisAppropriate10");

/* design */
var des1_1 = p.GetVar("trainingmethod_1");
var des1_2 = p.GetVar("trainingmethod_2");
var des1_3 = p.GetVar("trainingmethod_3");
var des1_4 = p.GetVar("trainingmethod_4");
var des2 = p.GetVar("TextEntry5");
var des3 = p.GetVar("TextEntry6");
var des4 = p.GetVar("TextEntry7");
var des5_1 = p.GetVar("instructionalmethod_1");
var des5_2 = p.GetVar("instructionalmethod_2");
var des5_3 = p.GetVar("instructionalmethod_3");
var des5_4 = p.GetVar("instructionalmethod_4");
var des6 = p.GetVar("ActivateLearners2");
var des7 = p.GetVar("WhichisAppropriate2");
var des8 = p.GetVar("WhichisAppropriate3");
var des9 = p.GetVar("WhichisAppropriate4");
var des10 = p.GetVar("WhichisAppropriate5");
var des11 = p.GetVar("WhichisAppropriate6");

/* development */

var dev1 = p.GetVar("WhichisAppropriate1");
var dev2 = p.GetVar("ActivateLearners3");

/* implementation */

var imp1 = p.GetVar("WhichisAppropriate");
var imp2 = p.GetVar("ActivateLearners");

/* evaluation */

var eva1 = p.GetVar("TextEntry42");
var eva2 = p.GetVar("TextEntry41");
var eva3 = p.GetVar("TextEntry43");
var eva4 = p.GetVar("TextEntry44");
var eva5 = p.GetVar("TextEntry45");
var eva6 = p.GetVar("TextEntry46");

printFrame = document.createElement("iframe");
printFrame.style.position = "absolute";
printFrame.style.top = 0 + "px"; 
printFrame.style.fontFamily = "Arial,sans-serif";
document.body.appendChild(printFrame);

printFrame.contentWindow.document.write('<h2>ADL course plan</h2>');

/* analysis */

printFrame.contentWindow.document.write('<h3>1. ANALYSIS</h3>');

printFrame.contentWindow.document.write('<h4>Identify and define the target audience</h4>');
printFrame.contentWindow.document.write('<p>'+ana1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define performance objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define learning objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Conduct a training strategy analysis</h4>');
printFrame.contentWindow.document.write('<p>'+ana4.replace(/\n/g, "<br/>")+'</p>');

/* design */

printFrame.contentWindow.document.write('<h3>2. DESIGN</h3>');

printFrame.contentWindow.document.write('<h4>Which training method are you going to use?</h4>');
printFrame.contentWindow.document.write('<p>'+des1_1+" "+des1_2+" "+des1_3+" "+des1_4+'</p>');

printFrame.contentWindow.document.write('<h4>How are you going to activate your learners?</h4>');

printFrame.contentWindow.document.write('<h5>1. Interaction with the teacher (tutoring, feedback, motivating…)</h5>');
printFrame.contentWindow.document.write('<p>'+des2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>2. Interaction with content (quizzes, questions…)</h5>');
printFrame.contentWindow.document.write('<p>'+des3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>3. Interaction with peers (teamwork, peer review, discussion)</h5>');
printFrame.contentWindow.document.write('<p>'+des4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Which are appropriate instructional methods for your course?</h5>');
printFrame.contentWindow.document.write('<p>'+des5_1+" "+des5_2+" "+des5_3+" "+des5_4+'</p>');

printFrame.contentWindow.document.write('<h5>Which SME would help in the creation of the examples, scenarios, quizzes?</h5>');
printFrame.contentWindow.document.write('<p>'+des6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which are the best media elements for your course? Write down your ideas.</h4>');

printFrame.contentWindow.document.write('<h5>Text / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des7.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Pictures / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des8.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Videos / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des9.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Audio / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des10.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Graphs / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des11.replace(/\n/g, "<br/>")+'</p>');

/* Development */

printFrame.contentWindow.document.write('<h3>3. DEVELOPMENT</h3>');

printFrame.contentWindow.document.write('<h4>Which roles and knowledge are needed for the design and development of the course? Who would be the right persons in your organization?</h4>');
printFrame.contentWindow.document.write('<p>'+dev1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>How will the testing be handled?</h4>');
printFrame.contentWindow.document.write('<p>'+dev2.replace(/\n/g, "<br/>")+'</p>');

/* Implementation */

printFrame.contentWindow.document.write('<h3>4. IMPLEMENTATION</h3>');

printFrame.contentWindow.document.write('<h4>To whom is the course available? What kind of administration is needed?</h4>');
printFrame.contentWindow.document.write('<p>'+imp1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which elements of LMS are you going to use in the course (e.g. tests, exercises, chat forums?)</h4>');
printFrame.contentWindow.document.write('<p>'+imp2.replace(/\n/g, "<br/>")+'</p>');

/* evaluation */

printFrame.contentWindow.document.write('<h3>5. EVALUATION</h3>');

printFrame.contentWindow.document.write('<h4>Surveys & Polls</h4>');
printFrame.contentWindow.document.write('<p>'+eva1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Online questionnaires</h4>');
printFrame.contentWindow.document.write('<p>'+eva3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Interviews</h4>');
printFrame.contentWindow.document.write('<p>'+eva5.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.print()
document.body.removeChild(printFrame);
}

function Script3()
{
  var p = GetPlayer();

/* analysis */

var ana1 = p.GetVar("WhichisAppropriate7");
var ana2 = p.GetVar("WhichisAppropriate8");
var ana3 = p.GetVar("WhichisAppropriate9");
var ana4 = p.GetVar("WhichisAppropriate10");

/* design */
var des1_1 = p.GetVar("trainingmethod_1");
var des1_2 = p.GetVar("trainingmethod_2");
var des1_3 = p.GetVar("trainingmethod_3");
var des1_4 = p.GetVar("trainingmethod_4");
var des2 = p.GetVar("TextEntry5");
var des3 = p.GetVar("TextEntry6");
var des4 = p.GetVar("TextEntry7");
var des5_1 = p.GetVar("instructionalmethod_1");
var des5_2 = p.GetVar("instructionalmethod_2");
var des5_3 = p.GetVar("instructionalmethod_3");
var des5_4 = p.GetVar("instructionalmethod_4");
var des6 = p.GetVar("ActivateLearners2");
var des7 = p.GetVar("WhichisAppropriate2");
var des8 = p.GetVar("WhichisAppropriate3");
var des9 = p.GetVar("WhichisAppropriate4");
var des10 = p.GetVar("WhichisAppropriate5");
var des11 = p.GetVar("WhichisAppropriate6");

/* development */

var dev1 = p.GetVar("WhichisAppropriate1");
var dev2 = p.GetVar("ActivateLearners3");

/* implementation */

var imp1 = p.GetVar("WhichisAppropriate");
var imp2 = p.GetVar("ActivateLearners");

/* evaluation */

var eva1 = p.GetVar("TextEntry42");
var eva2 = p.GetVar("TextEntry41");
var eva3 = p.GetVar("TextEntry43");
var eva4 = p.GetVar("TextEntry44");
var eva5 = p.GetVar("TextEntry45");
var eva6 = p.GetVar("TextEntry46");

printFrame = document.createElement("iframe");
printFrame.style.position = "absolute";
printFrame.style.top = 0 + "px"; 
printFrame.style.fontFamily = "Arial,sans-serif";
document.body.appendChild(printFrame);

printFrame.contentWindow.document.write('<h2>ADL course plan</h2>');

/* analysis */

printFrame.contentWindow.document.write('<h3>1. ANALYSIS</h3>');

printFrame.contentWindow.document.write('<h4>Identify and define the target audience</h4>');
printFrame.contentWindow.document.write('<p>'+ana1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define performance objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define learning objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Conduct a training strategy analysis</h4>');
printFrame.contentWindow.document.write('<p>'+ana4.replace(/\n/g, "<br/>")+'</p>');

/* design */

printFrame.contentWindow.document.write('<h3>2. DESIGN</h3>');

printFrame.contentWindow.document.write('<h4>Which training method are you going to use?</h4>');
printFrame.contentWindow.document.write('<p>'+des1_1+" "+des1_2+" "+des1_3+" "+des1_4+'</p>');

printFrame.contentWindow.document.write('<h4>How are you going to activate your learners?</h4>');

printFrame.contentWindow.document.write('<h5>1. Interaction with the teacher (tutoring, feedback, motivating…)</h5>');
printFrame.contentWindow.document.write('<p>'+des2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>2. Interaction with content (quizzes, questions…)</h5>');
printFrame.contentWindow.document.write('<p>'+des3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>3. Interaction with peers (teamwork, peer review, discussion)</h5>');
printFrame.contentWindow.document.write('<p>'+des4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Which are appropriate instructional methods for your course?</h5>');
printFrame.contentWindow.document.write('<p>'+des5_1+" "+des5_2+" "+des5_3+" "+des5_4+'</p>');

printFrame.contentWindow.document.write('<h5>Which SME would help in the creation of the examples, scenarios, quizzes?</h5>');
printFrame.contentWindow.document.write('<p>'+des6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which are the best media elements for your course? Write down your ideas.</h4>');

printFrame.contentWindow.document.write('<h5>Text / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des7.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Pictures / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des8.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Videos / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des9.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Audio / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des10.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Graphs / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des11.replace(/\n/g, "<br/>")+'</p>');

/* Development */

printFrame.contentWindow.document.write('<h3>3. DEVELOPMENT</h3>');

printFrame.contentWindow.document.write('<h4>Which roles and knowledge are needed for the design and development of the course? Who would be the right persons in your organization?</h4>');
printFrame.contentWindow.document.write('<p>'+dev1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>How will the testing be handled?</h4>');
printFrame.contentWindow.document.write('<p>'+dev2.replace(/\n/g, "<br/>")+'</p>');

/* Implementation */

printFrame.contentWindow.document.write('<h3>4. IMPLEMENTATION</h3>');

printFrame.contentWindow.document.write('<h4>To whom is the course available? What kind of administration is needed?</h4>');
printFrame.contentWindow.document.write('<p>'+imp1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which elements of LMS are you going to use in the course (e.g. tests, exercises, chat forums?)</h4>');
printFrame.contentWindow.document.write('<p>'+imp2.replace(/\n/g, "<br/>")+'</p>');

/* evaluation */

printFrame.contentWindow.document.write('<h3>5. EVALUATION</h3>');

printFrame.contentWindow.document.write('<h4>Surveys & Polls</h4>');
printFrame.contentWindow.document.write('<p>'+eva1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Online questionnaires</h4>');
printFrame.contentWindow.document.write('<p>'+eva3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Interviews</h4>');
printFrame.contentWindow.document.write('<p>'+eva5.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.print()
document.body.removeChild(printFrame);
}

function Script4()
{
  var p = GetPlayer();

/* analysis */

var ana1 = p.GetVar("WhichisAppropriate7");
var ana2 = p.GetVar("WhichisAppropriate8");
var ana3 = p.GetVar("WhichisAppropriate9");
var ana4 = p.GetVar("WhichisAppropriate10");

/* design */
var des1_1 = p.GetVar("trainingmethod_1");
var des1_2 = p.GetVar("trainingmethod_2");
var des1_3 = p.GetVar("trainingmethod_3");
var des1_4 = p.GetVar("trainingmethod_4");
var des2 = p.GetVar("TextEntry5");
var des3 = p.GetVar("TextEntry6");
var des4 = p.GetVar("TextEntry7");
var des5_1 = p.GetVar("instructionalmethod_1");
var des5_2 = p.GetVar("instructionalmethod_2");
var des5_3 = p.GetVar("instructionalmethod_3");
var des5_4 = p.GetVar("instructionalmethod_4");
var des6 = p.GetVar("ActivateLearners2");
var des7 = p.GetVar("WhichisAppropriate2");
var des8 = p.GetVar("WhichisAppropriate3");
var des9 = p.GetVar("WhichisAppropriate4");
var des10 = p.GetVar("WhichisAppropriate5");
var des11 = p.GetVar("WhichisAppropriate6");

/* development */

var dev1 = p.GetVar("WhichisAppropriate1");
var dev2 = p.GetVar("ActivateLearners3");

/* implementation */

var imp1 = p.GetVar("WhichisAppropriate");
var imp2 = p.GetVar("ActivateLearners");

/* evaluation */

var eva1 = p.GetVar("TextEntry42");
var eva2 = p.GetVar("TextEntry41");
var eva3 = p.GetVar("TextEntry43");
var eva4 = p.GetVar("TextEntry44");
var eva5 = p.GetVar("TextEntry45");
var eva6 = p.GetVar("TextEntry46");

printFrame = document.createElement("iframe");
printFrame.style.position = "absolute";
printFrame.style.top = 0 + "px"; 
printFrame.style.fontFamily = "Arial,sans-serif";
document.body.appendChild(printFrame);

printFrame.contentWindow.document.write('<h2>ADL course plan</h2>');

/* analysis */

printFrame.contentWindow.document.write('<h3>1. ANALYSIS</h3>');

printFrame.contentWindow.document.write('<h4>Identify and define the target audience</h4>');
printFrame.contentWindow.document.write('<p>'+ana1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define performance objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define learning objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Conduct a training strategy analysis</h4>');
printFrame.contentWindow.document.write('<p>'+ana4.replace(/\n/g, "<br/>")+'</p>');

/* design */

printFrame.contentWindow.document.write('<h3>2. DESIGN</h3>');

printFrame.contentWindow.document.write('<h4>Which training method are you going to use?</h4>');
printFrame.contentWindow.document.write('<p>'+des1_1+" "+des1_2+" "+des1_3+" "+des1_4+'</p>');

printFrame.contentWindow.document.write('<h4>How are you going to activate your learners?</h4>');

printFrame.contentWindow.document.write('<h5>1. Interaction with the teacher (tutoring, feedback, motivating…)</h5>');
printFrame.contentWindow.document.write('<p>'+des2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>2. Interaction with content (quizzes, questions…)</h5>');
printFrame.contentWindow.document.write('<p>'+des3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>3. Interaction with peers (teamwork, peer review, discussion)</h5>');
printFrame.contentWindow.document.write('<p>'+des4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Which are appropriate instructional methods for your course?</h5>');
printFrame.contentWindow.document.write('<p>'+des5_1+" "+des5_2+" "+des5_3+" "+des5_4+'</p>');

printFrame.contentWindow.document.write('<h5>Which SME would help in the creation of the examples, scenarios, quizzes?</h5>');
printFrame.contentWindow.document.write('<p>'+des6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which are the best media elements for your course? Write down your ideas.</h4>');

printFrame.contentWindow.document.write('<h5>Text / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des7.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Pictures / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des8.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Videos / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des9.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Audio / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des10.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Graphs / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des11.replace(/\n/g, "<br/>")+'</p>');

/* Development */

printFrame.contentWindow.document.write('<h3>3. DEVELOPMENT</h3>');

printFrame.contentWindow.document.write('<h4>Which roles and knowledge are needed for the design and development of the course? Who would be the right persons in your organization?</h4>');
printFrame.contentWindow.document.write('<p>'+dev1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>How will the testing be handled?</h4>');
printFrame.contentWindow.document.write('<p>'+dev2.replace(/\n/g, "<br/>")+'</p>');

/* Implementation */

printFrame.contentWindow.document.write('<h3>4. IMPLEMENTATION</h3>');

printFrame.contentWindow.document.write('<h4>To whom is the course available? What kind of administration is needed?</h4>');
printFrame.contentWindow.document.write('<p>'+imp1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which elements of LMS are you going to use in the course (e.g. tests, exercises, chat forums?)</h4>');
printFrame.contentWindow.document.write('<p>'+imp2.replace(/\n/g, "<br/>")+'</p>');

/* evaluation */

printFrame.contentWindow.document.write('<h3>5. EVALUATION</h3>');

printFrame.contentWindow.document.write('<h4>Surveys & Polls</h4>');
printFrame.contentWindow.document.write('<p>'+eva1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Online questionnaires</h4>');
printFrame.contentWindow.document.write('<p>'+eva3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Interviews</h4>');
printFrame.contentWindow.document.write('<p>'+eva5.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.print()
document.body.removeChild(printFrame);
}

function Script5()
{
  var p = GetPlayer();

/* analysis */

var ana1 = p.GetVar("WhichisAppropriate7");
var ana2 = p.GetVar("WhichisAppropriate8");
var ana3 = p.GetVar("WhichisAppropriate9");
var ana4 = p.GetVar("WhichisAppropriate10");

/* design */
var des1_1 = p.GetVar("trainingmethod_1");
var des1_2 = p.GetVar("trainingmethod_2");
var des1_3 = p.GetVar("trainingmethod_3");
var des1_4 = p.GetVar("trainingmethod_4");
var des2 = p.GetVar("TextEntry5");
var des3 = p.GetVar("TextEntry6");
var des4 = p.GetVar("TextEntry7");
var des5_1 = p.GetVar("instructionalmethod_1");
var des5_2 = p.GetVar("instructionalmethod_2");
var des5_3 = p.GetVar("instructionalmethod_3");
var des5_4 = p.GetVar("instructionalmethod_4");
var des6 = p.GetVar("ActivateLearners2");
var des7 = p.GetVar("WhichisAppropriate2");
var des8 = p.GetVar("WhichisAppropriate3");
var des9 = p.GetVar("WhichisAppropriate4");
var des10 = p.GetVar("WhichisAppropriate5");
var des11 = p.GetVar("WhichisAppropriate6");

/* development */

var dev1 = p.GetVar("WhichisAppropriate1");
var dev2 = p.GetVar("ActivateLearners3");

/* implementation */

var imp1 = p.GetVar("WhichisAppropriate");
var imp2 = p.GetVar("ActivateLearners");

/* evaluation */

var eva1 = p.GetVar("TextEntry42");
var eva2 = p.GetVar("TextEntry41");
var eva3 = p.GetVar("TextEntry43");
var eva4 = p.GetVar("TextEntry44");
var eva5 = p.GetVar("TextEntry45");
var eva6 = p.GetVar("TextEntry46");

printFrame = document.createElement("iframe");
printFrame.style.position = "absolute";
printFrame.style.top = 0 + "px"; 
printFrame.style.fontFamily = "Arial,sans-serif";
document.body.appendChild(printFrame);

printFrame.contentWindow.document.write('<h2>ADL course plan</h2>');

/* analysis */

printFrame.contentWindow.document.write('<h3>1. ANALYSIS</h3>');

printFrame.contentWindow.document.write('<h4>Identify and define the target audience</h4>');
printFrame.contentWindow.document.write('<p>'+ana1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define performance objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define learning objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Conduct a training strategy analysis</h4>');
printFrame.contentWindow.document.write('<p>'+ana4.replace(/\n/g, "<br/>")+'</p>');

/* design */

printFrame.contentWindow.document.write('<h3>2. DESIGN</h3>');

printFrame.contentWindow.document.write('<h4>Which training method are you going to use?</h4>');
printFrame.contentWindow.document.write('<p>'+des1_1+" "+des1_2+" "+des1_3+" "+des1_4+'</p>');

printFrame.contentWindow.document.write('<h4>How are you going to activate your learners?</h4>');

printFrame.contentWindow.document.write('<h5>1. Interaction with the teacher (tutoring, feedback, motivating…)</h5>');
printFrame.contentWindow.document.write('<p>'+des2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>2. Interaction with content (quizzes, questions…)</h5>');
printFrame.contentWindow.document.write('<p>'+des3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>3. Interaction with peers (teamwork, peer review, discussion)</h5>');
printFrame.contentWindow.document.write('<p>'+des4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Which are appropriate instructional methods for your course?</h5>');
printFrame.contentWindow.document.write('<p>'+des5_1+" "+des5_2+" "+des5_3+" "+des5_4+'</p>');

printFrame.contentWindow.document.write('<h5>Which SME would help in the creation of the examples, scenarios, quizzes?</h5>');
printFrame.contentWindow.document.write('<p>'+des6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which are the best media elements for your course? Write down your ideas.</h4>');

printFrame.contentWindow.document.write('<h5>Text / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des7.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Pictures / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des8.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Videos / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des9.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Audio / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des10.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Graphs / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des11.replace(/\n/g, "<br/>")+'</p>');

/* Development */

printFrame.contentWindow.document.write('<h3>3. DEVELOPMENT</h3>');

printFrame.contentWindow.document.write('<h4>Which roles and knowledge are needed for the design and development of the course? Who would be the right persons in your organization?</h4>');
printFrame.contentWindow.document.write('<p>'+dev1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>How will the testing be handled?</h4>');
printFrame.contentWindow.document.write('<p>'+dev2.replace(/\n/g, "<br/>")+'</p>');

/* Implementation */

printFrame.contentWindow.document.write('<h3>4. IMPLEMENTATION</h3>');

printFrame.contentWindow.document.write('<h4>To whom is the course available? What kind of administration is needed?</h4>');
printFrame.contentWindow.document.write('<p>'+imp1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which elements of LMS are you going to use in the course (e.g. tests, exercises, chat forums?)</h4>');
printFrame.contentWindow.document.write('<p>'+imp2.replace(/\n/g, "<br/>")+'</p>');

/* evaluation */

printFrame.contentWindow.document.write('<h3>5. EVALUATION</h3>');

printFrame.contentWindow.document.write('<h4>Surveys & Polls</h4>');
printFrame.contentWindow.document.write('<p>'+eva1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Online questionnaires</h4>');
printFrame.contentWindow.document.write('<p>'+eva3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Interviews</h4>');
printFrame.contentWindow.document.write('<p>'+eva5.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.print()
document.body.removeChild(printFrame);
}

function Script6()
{
  var p = GetPlayer();

/* analysis */

var ana1 = p.GetVar("WhichisAppropriate7");
var ana2 = p.GetVar("WhichisAppropriate8");
var ana3 = p.GetVar("WhichisAppropriate9");
var ana4 = p.GetVar("WhichisAppropriate10");

/* design */
var des1_1 = p.GetVar("trainingmethod_1");
var des1_2 = p.GetVar("trainingmethod_2");
var des1_3 = p.GetVar("trainingmethod_3");
var des1_4 = p.GetVar("trainingmethod_4");
var des2 = p.GetVar("TextEntry5");
var des3 = p.GetVar("TextEntry6");
var des4 = p.GetVar("TextEntry7");
var des5_1 = p.GetVar("instructionalmethod_1");
var des5_2 = p.GetVar("instructionalmethod_2");
var des5_3 = p.GetVar("instructionalmethod_3");
var des5_4 = p.GetVar("instructionalmethod_4");
var des6 = p.GetVar("ActivateLearners2");
var des7 = p.GetVar("WhichisAppropriate2");
var des8 = p.GetVar("WhichisAppropriate3");
var des9 = p.GetVar("WhichisAppropriate4");
var des10 = p.GetVar("WhichisAppropriate5");
var des11 = p.GetVar("WhichisAppropriate6");

/* development */

var dev1 = p.GetVar("WhichisAppropriate1");
var dev2 = p.GetVar("ActivateLearners3");

/* implementation */

var imp1 = p.GetVar("WhichisAppropriate");
var imp2 = p.GetVar("ActivateLearners");

/* evaluation */

var eva1 = p.GetVar("TextEntry42");
var eva2 = p.GetVar("TextEntry41");
var eva3 = p.GetVar("TextEntry43");
var eva4 = p.GetVar("TextEntry44");
var eva5 = p.GetVar("TextEntry45");
var eva6 = p.GetVar("TextEntry46");

printFrame = document.createElement("iframe");
printFrame.style.position = "absolute";
printFrame.style.top = 0 + "px"; 
printFrame.style.fontFamily = "Arial,sans-serif";
document.body.appendChild(printFrame);

printFrame.contentWindow.document.write('<h2>ADL course plan</h2>');

/* analysis */

printFrame.contentWindow.document.write('<h3>1. ANALYSIS</h3>');

printFrame.contentWindow.document.write('<h4>Identify and define the target audience</h4>');
printFrame.contentWindow.document.write('<p>'+ana1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define performance objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define learning objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Conduct a training strategy analysis</h4>');
printFrame.contentWindow.document.write('<p>'+ana4.replace(/\n/g, "<br/>")+'</p>');

/* design */

printFrame.contentWindow.document.write('<h3>2. DESIGN</h3>');

printFrame.contentWindow.document.write('<h4>Which training method are you going to use?</h4>');
printFrame.contentWindow.document.write('<p>'+des1_1+" "+des1_2+" "+des1_3+" "+des1_4+'</p>');

printFrame.contentWindow.document.write('<h4>How are you going to activate your learners?</h4>');

printFrame.contentWindow.document.write('<h5>1. Interaction with the teacher (tutoring, feedback, motivating…)</h5>');
printFrame.contentWindow.document.write('<p>'+des2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>2. Interaction with content (quizzes, questions…)</h5>');
printFrame.contentWindow.document.write('<p>'+des3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>3. Interaction with peers (teamwork, peer review, discussion)</h5>');
printFrame.contentWindow.document.write('<p>'+des4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Which are appropriate instructional methods for your course?</h5>');
printFrame.contentWindow.document.write('<p>'+des5_1+" "+des5_2+" "+des5_3+" "+des5_4+'</p>');

printFrame.contentWindow.document.write('<h5>Which SME would help in the creation of the examples, scenarios, quizzes?</h5>');
printFrame.contentWindow.document.write('<p>'+des6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which are the best media elements for your course? Write down your ideas.</h4>');

printFrame.contentWindow.document.write('<h5>Text / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des7.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Pictures / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des8.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Videos / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des9.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Audio / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des10.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Graphs / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des11.replace(/\n/g, "<br/>")+'</p>');

/* Development */

printFrame.contentWindow.document.write('<h3>3. DEVELOPMENT</h3>');

printFrame.contentWindow.document.write('<h4>Which roles and knowledge are needed for the design and development of the course? Who would be the right persons in your organization?</h4>');
printFrame.contentWindow.document.write('<p>'+dev1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>How will the testing be handled?</h4>');
printFrame.contentWindow.document.write('<p>'+dev2.replace(/\n/g, "<br/>")+'</p>');

/* Implementation */

printFrame.contentWindow.document.write('<h3>4. IMPLEMENTATION</h3>');

printFrame.contentWindow.document.write('<h4>To whom is the course available? What kind of administration is needed?</h4>');
printFrame.contentWindow.document.write('<p>'+imp1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which elements of LMS are you going to use in the course (e.g. tests, exercises, chat forums?)</h4>');
printFrame.contentWindow.document.write('<p>'+imp2.replace(/\n/g, "<br/>")+'</p>');

/* evaluation */

printFrame.contentWindow.document.write('<h3>5. EVALUATION</h3>');

printFrame.contentWindow.document.write('<h4>Surveys & Polls</h4>');
printFrame.contentWindow.document.write('<p>'+eva1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Online questionnaires</h4>');
printFrame.contentWindow.document.write('<p>'+eva3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Interviews</h4>');
printFrame.contentWindow.document.write('<p>'+eva5.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.print()
document.body.removeChild(printFrame);
}

function Script7()
{
  var p = GetPlayer();

/* analysis */

var ana1 = p.GetVar("WhichisAppropriate7");
var ana2 = p.GetVar("WhichisAppropriate8");
var ana3 = p.GetVar("WhichisAppropriate9");
var ana4 = p.GetVar("WhichisAppropriate10");

/* design */
var des1_1 = p.GetVar("trainingmethod_1");
var des1_2 = p.GetVar("trainingmethod_2");
var des1_3 = p.GetVar("trainingmethod_3");
var des1_4 = p.GetVar("trainingmethod_4");
var des2 = p.GetVar("TextEntry5");
var des3 = p.GetVar("TextEntry6");
var des4 = p.GetVar("TextEntry7");
var des5_1 = p.GetVar("instructionalmethod_1");
var des5_2 = p.GetVar("instructionalmethod_2");
var des5_3 = p.GetVar("instructionalmethod_3");
var des5_4 = p.GetVar("instructionalmethod_4");
var des6 = p.GetVar("ActivateLearners2");
var des7 = p.GetVar("WhichisAppropriate2");
var des8 = p.GetVar("WhichisAppropriate3");
var des9 = p.GetVar("WhichisAppropriate4");
var des10 = p.GetVar("WhichisAppropriate5");
var des11 = p.GetVar("WhichisAppropriate6");

/* development */

var dev1 = p.GetVar("WhichisAppropriate1");
var dev2 = p.GetVar("ActivateLearners3");

/* implementation */

var imp1 = p.GetVar("WhichisAppropriate");
var imp2 = p.GetVar("ActivateLearners");

/* evaluation */

var eva1 = p.GetVar("TextEntry42");
var eva2 = p.GetVar("TextEntry41");
var eva3 = p.GetVar("TextEntry43");
var eva4 = p.GetVar("TextEntry44");
var eva5 = p.GetVar("TextEntry45");
var eva6 = p.GetVar("TextEntry46");

printFrame = document.createElement("iframe");
printFrame.style.position = "absolute";
printFrame.style.top = 0 + "px"; 
printFrame.style.fontFamily = "Arial,sans-serif";
document.body.appendChild(printFrame);

printFrame.contentWindow.document.write('<h2>ADL course plan</h2>');

/* analysis */

printFrame.contentWindow.document.write('<h3>1. ANALYSIS</h3>');

printFrame.contentWindow.document.write('<h4>Identify and define the target audience</h4>');
printFrame.contentWindow.document.write('<p>'+ana1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define performance objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Define learning objectives</h4>');
printFrame.contentWindow.document.write('<p>'+ana3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Conduct a training strategy analysis</h4>');
printFrame.contentWindow.document.write('<p>'+ana4.replace(/\n/g, "<br/>")+'</p>');

/* design */

printFrame.contentWindow.document.write('<h3>2. DESIGN</h3>');

printFrame.contentWindow.document.write('<h4>Which training method are you going to use?</h4>');
printFrame.contentWindow.document.write('<p>'+des1_1+" "+des1_2+" "+des1_3+" "+des1_4+'</p>');

printFrame.contentWindow.document.write('<h4>How are you going to activate your learners?</h4>');

printFrame.contentWindow.document.write('<h5>1. Interaction with the teacher (tutoring, feedback, motivating…)</h5>');
printFrame.contentWindow.document.write('<p>'+des2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>2. Interaction with content (quizzes, questions…)</h5>');
printFrame.contentWindow.document.write('<p>'+des3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>3. Interaction with peers (teamwork, peer review, discussion)</h5>');
printFrame.contentWindow.document.write('<p>'+des4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Which are appropriate instructional methods for your course?</h5>');
printFrame.contentWindow.document.write('<p>'+des5_1+" "+des5_2+" "+des5_3+" "+des5_4+'</p>');

printFrame.contentWindow.document.write('<h5>Which SME would help in the creation of the examples, scenarios, quizzes?</h5>');
printFrame.contentWindow.document.write('<p>'+des6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which are the best media elements for your course? Write down your ideas.</h4>');

printFrame.contentWindow.document.write('<h5>Text / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des7.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Pictures / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des8.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Videos / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des9.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Audio / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des10.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Graphs / where to get them?</h5>');
printFrame.contentWindow.document.write('<p>'+des11.replace(/\n/g, "<br/>")+'</p>');

/* Development */

printFrame.contentWindow.document.write('<h3>3. DEVELOPMENT</h3>');

printFrame.contentWindow.document.write('<h4>Which roles and knowledge are needed for the design and development of the course? Who would be the right persons in your organization?</h4>');
printFrame.contentWindow.document.write('<p>'+dev1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>How will the testing be handled?</h4>');
printFrame.contentWindow.document.write('<p>'+dev2.replace(/\n/g, "<br/>")+'</p>');

/* Implementation */

printFrame.contentWindow.document.write('<h3>4. IMPLEMENTATION</h3>');

printFrame.contentWindow.document.write('<h4>To whom is the course available? What kind of administration is needed?</h4>');
printFrame.contentWindow.document.write('<p>'+imp1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Which elements of LMS are you going to use in the course (e.g. tests, exercises, chat forums?)</h4>');
printFrame.contentWindow.document.write('<p>'+imp2.replace(/\n/g, "<br/>")+'</p>');

/* evaluation */

printFrame.contentWindow.document.write('<h3>5. EVALUATION</h3>');

printFrame.contentWindow.document.write('<h4>Surveys & Polls</h4>');
printFrame.contentWindow.document.write('<p>'+eva1.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva2.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Online questionnaires</h4>');
printFrame.contentWindow.document.write('<p>'+eva3.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva4.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h4>Interviews</h4>');
printFrame.contentWindow.document.write('<p>'+eva5.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.document.write('<h5>Target group to be used</h5>');
printFrame.contentWindow.document.write('<p>'+eva6.replace(/\n/g, "<br/>")+'</p>');

printFrame.contentWindow.print()
document.body.removeChild(printFrame);
}

