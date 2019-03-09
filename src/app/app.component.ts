import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstname = "";
  lastname = "";

  userphoto:File;

  username : string[] = [];

  studentList: any[] =
    [
      {
        "sid": 1, "sname": "yogesh", "scity": "nadiad","smarks":"35",
        "hobbies": ["cricket", "football", "chess","sadsa"]
      },
      {
        "sid": 2, "sname": "hiren", "scity": "nadiad","smarks":44,
        "hobbies": ["cricket", "football", "chess","sdasd","sadsadA"]
      }
      , {
        "sid": 3, "sname": "ayushi", "scity": "nadiad","smarks":30,
        "hobbies": ["cricket", "games", "chess"]
      }
    ];


    addUserInfo(fname,lname)
    {
      this.firstname = "";
      this.lastname = ""; 
        this.username.push(fname + " " + lname);     
    }

    drp(name)
    {
      alert(name);
    }


    show(name)
    {
      this.lastname = name.value;
    }

    upload(sd)
    {
      this.userphoto = sd.files[0];
    }


  //   datalist :any =
  //   {
  //     "medications":[{
  //             "aceInhibitors":[{
  //                 "name":"lisinopril",
  //                 "strength":"10 mg Tab",
  //                 "dose":"1 tab",
  //                 "route":"PO",
  //                 "sig":"daily",
  //                 "pillCount":"#90",
  //                 "refills":"Refill 3"
  //             }],
  //             "antianginal":[{
  //                 "name":"nitroglycerin",
  //                 "strength":"0.4 mg Sublingual Tab",
  //                 "dose":"1 tab",
  //                 "route":"SL",
  //                 "sig":"q15min PRN",
  //                 "pillCount":"#30",
  //                 "refills":"Refill 1"
  //             }],
  //             "anticoagulants":[{
  //                 "name":"warfarin sodium",
  //                 "strength":"3 mg Tab",
  //                 "dose":"1 tab",
  //                 "route":"PO",
  //                 "sig":"daily",
  //                 "pillCount":"#90",
  //                 "refills":"Refill 3"
  //             }],
  //             "betaBlocker":[{
  //                 "name":"metoprolol tartrate",
  //                 "strength":"25 mg Tab",
  //                 "dose":"1 tab",
  //                 "route":"PO",
  //                 "sig":"daily",
  //                 "pillCount":"#90",
  //                 "refills":"Refill 3"
  //             }],
  //             "diuretic":[{
  //                 "name":"furosemide",
  //                 "strength":"40 mg Tab",
  //                 "dose":"1 tab",
  //                 "route":"PO",
  //                 "sig":"daily",
  //                 "pillCount":"#90",
  //                 "refills":"Refill 3"
  //             }],
  //             "mineral":[{
  //                 "name":"potassium chloride ER",
  //                 "strength":"10 mEq Tab",
  //                 "dose":"1 tab",
  //                 "route":"PO",
  //                 "sig":"daily",
  //                 "pillCount":"#90",
  //                 "refills":"Refill 3"
  //             }]
  //         }
  //     ],
  //     "labs":[{
  //         "name":"Arterial Blood Gas",
  //         "time":"Today",
  //         "location":"Main Hospital Lab"      
  //         },
  //         {
  //         "name":"BMP",
  //         "time":"Today",
  //         "location":"Primary Care Clinic"    
  //         },
  //         {
  //         "name":"BNP",
  //         "time":"3 Weeks",
  //         "location":"Primary Care Clinic"    
  //         },
  //         {
  //         "name":"BUN",
  //         "time":"1 Year",
  //         "location":"Primary Care Clinic"    
  //         },
  //         {
  //         "name":"Cardiac Enzymes",
  //         "time":"Today",
  //         "location":"Primary Care Clinic"    
  //         },
  //         {
  //         "name":"CBC",
  //         "time":"1 Year",
  //         "location":"Primary Care Clinic"    
  //         },
  //         {
  //         "name":"Creatinine",
  //         "time":"1 Year",
  //         "location":"Main Hospital Lab"  
  //         },
  //         {
  //         "name":"Electrolyte Panel",
  //         "time":"1 Year",
  //         "location":"Primary Care Clinic"    
  //         },
  //         {
  //         "name":"Glucose",
  //         "time":"1 Year",
  //         "location":"Main Hospital Lab"  
  //         },
  //         {
  //         "name":"PT/INR",
  //         "time":"3 Weeks",
  //         "location":"Primary Care Clinic"    
  //         },
  //         {
  //         "name":"PTT",
  //         "time":"3 Weeks",
  //         "location":"Coumadin Clinic"    
  //         },
  //         {
  //         "name":"TSH",
  //         "time":"1 Year",
  //         "location":"Primary Care Clinic"    
  //         }
  //     ],
  //     "imaging":[{
  //         "name":"Chest X-Ray",
  //         "time":"Today",
  //         "location":"Main Hospital Radiology"    
  //         },
  //         {
  //         "name":"Chest X-Ray",
  //         "time":"Today",
  //         "location":"Main Hospital Radiology"    
  //         },
  //         {
  //         "name":"Chest X-Ray",
  //         "time":"Today",
  //         "location":"Main Hospital Radiology"    
  //         }
  //     ]
  // };

}