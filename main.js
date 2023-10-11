import './style.css'
import {TextInterface} from './textInterface';

const ti = new TextInterface();
ti.outputAnimationLength = 9;
ti.outputDelay = 9

console.log("I made a change!")

ti.setTitle('Guess That State!!!!!!!!!!!!!!!!!!!');
ti.output('Think of a state. I will try to guess it. Ready?');
await ti.readText();
ti.clear();
ti.showImage('Images/Map.PNG')
ti.output('What region of the US is it in?');
let region = await ti.readChoice(['North East','South','Midwest','West','Alaska/Hawaii'])
if (region == 'North East') {
 ti.clear();
 ti.showImage('Images/North East.PNG')
 ti.output('Is it a part of New England?');
  let newEngland = await ti.readYesOrNo ();
  if (newEngland == true){
   ti.clear();
   ti.showImage('Images/North East.PNG')
   ti.output('Is it north of Massachusetts?');
    let northMass = await ti.readYesOrNo();
    if (northMass == true){
     ti.clear ();
     ti.showImage('Images/North East.PNG')
     ti.output('Is it Maine?');
      let maine = await ti.readYesOrNo();
      if (maine == true){
       ti.clear();
       ti.showImage('Images/North East.PNG')
       ti.output('The state was Maine...now reset the page and go again!');
      }else{
       ti.clear();
       ti.showImage('Images/North East.PNG')
       ti.output('Is it New Hampshire');
        let newHampshire = await ti.readYesOrNo();
        if (newHampshire == true){
         ti.clear();
         ti.showImage('Images/North East.PNG')
         ti.output('The state was New Hampshire...now reset the page and go again!');
        }
        else{
         ti.clear();
         ti.showImage('Images/North East.PNG')
         ti.output('The state was Vermont...now reset the page and go again!');
        }
      }
    }
    else{
     ti.clear();
     ti.showImage('Images/North East.PNG')
     ti.output('Is it Massachusetts?');
      let mass = await ti.readYesOrNo();
      if (mass== true){
       ti.clear();
       ti.showImage('Images/North East.PNG')
       ti.output('The state was Massachusetts...good choice...now reset the page and go again!');
      }
      else{
       ti.clear();
       ti.showImage('Images/North East.PNG')
       ti.output('Is it Rhode Island?');
        let rhode = await ti.readYesOrNo();
        if (rhode == true){
         ti.clear ();
         ti.showImage('Images/North East.PNG')
         ti.output('The state was Rhode Island...now reset the page and go again!');
        }
        else{
         ti.clear();
         ti.showImage('Images/North East.PNG')
         ti.output('The state was Connecticut...now reset the page and go again!');
        }
      }
    }
  }
  else{
   ti.clear();
   ti.showImage('Images/North East.PNG')
   ti.output('is it New York?');
    let newYork = await ti.readYesOrNo();
    if (newYork == true){
    ti.clear();
    ti.showImage('Images/North East.PNG')
    ti.output('The state was New York...now reset the page and go again!');
    }
    else{
     ti.clear();
     ti.showImage('Images/North East.PNG')
     ti.output('is it New Jersey?');
      let newJersey = await ti.readYesOrNo();
      if (newJersey == true){
       ti.clear();
       ti.showImage('Images/North East.PNG')
       ti.output('The state was New Jersey...now reset the page and go again!');
      }
      else{
       ti.clear();
       ti.showImage('Images/North East.PNG')
       ti.output('The state was Pennsylvania...now reset the page and go again.');
      }
    }
  }
}






if (region == 'South'){
 ti.clear();
 ti.showImage('Images/South.PNG')
 ti.output('What part of the South is it in?');
  let partSouth = await ti.readChoice(['West South Central','East South Central','South Atlantic'])
  if (partSouth == 'West South Central') {
   ti.clear();
   ti.showImage('Images/South.PNG')
   ti.output('Is it a part of the bottom boarder of the U.S?');
    let bottomBoarder = await ti.readYesOrNo ()
    if (bottomBoarder == true){
     ti.clear();
     ti.showImage('Images/South.PNG')
     ti.output('Is it Texas?');
      let texas = await ti.readYesOrNo ()
      if (texas == true){
       ti.clear();
       ti.showImage('Images/South.PNG')
       ti.output('The state was texas...now reset the page and go again!');
      }
      else{
       ti.clear();
       ti.output('The state was Louisiana...now reset the page and go again!');
      }  
    }
    else{
     ti.clear();
     ti.showImage('Images/South.PNG')
     ti.output('Is it Oklahoma?');
      let oklahoma = await ti.readYesOrNo ()
      if (oklahoma == true){
       ti.clear();
       ti.showImage('Images/South.PNG')
       ti.output('The state was Oklahoma...now reset the page and go again!');
      }
      else{
       ti.clear();
       ti.showImage('Images/South.PNG')
       ti.output('The state was Arkansas...now reset the page and go again!');
      }
    }
  }
  if (partSouth == 'East South Central'){
   ti.clear();
   ti.showImage('Images/South.PNG')
   ti.output('Is it one of the bottom two states?');
    let bottomTwo = await ti.readYesOrNo ()
    if (bottomTwo == true){
     ti.clear();
     ti.showImage('Images/South.PNG')
     ti.output('Is it Alabama?');
      let alabama = await ti.readYesOrNo ()
      if (alabama == true){
       ti.clear();
       ti.showImage('Images/South.PNG')
       ti.output('The state was Alabama...now reset the page and go again!');
      }
      else{
       ti.clear();
       ti.showImage('Images/South.PNG')
       ti.output('The state was Mississippi...now reset the page and go again!');
      }
    }
    else{
     ti.clear();
     ti.showImage('Images/South.PNG')
     ti.output('Is it Kentucky?');
      let kentucky = await ti.readYesOrNo ()
      if (kentucky == true){
       ti.clear();
       ti.showImage('Images/South.PNG')
       ti.output('The state was Kentucky...now reset the page and go again!');
      }
      else{
       ti.clear();
       ti.showImage('Images/South.PNG')
       ti.output('The state was Tennessee...now reset the page and go again!');
      }
    }
  }
 if (partSouth == 'South Atlantic'){
 ti.clear();
 ti.showImage('Images/South.PNG')
 ti.output('Is it below the word "South" on the map?');
  let below = await ti.readYesOrNo ()
  if (below == true){
   ti.clear();
   ti.showImage('Images/South.PNG')
   ti.output('Is it Florida?');
    let florida = await ti.readYesOrNo ()
    if (florida == true){
     ti.clear();
     ti.showImage('Images/South.PNG')
     ti.output('The state was Florida...now reset the page and go again!');
    }
    else{
     ti.clear();
     ti.showImage('Images/South.PNG')
     ti.output('Is it Georgia?');
      let georgia = await ti.readYesOrNo ()
      if (georgia == true){
       ti.clear();
       ti.showImage('Images/South.PNG')
       ti.output('The state was Georgia...now reset the page and go again!');
      }
      else{
       ti.clear();
       ti.showImage('Images/South.PNG')
       ti.output('The state was South Carolina...now reset the page and go again!');
      }
    }
  }
 else{
  ti.clear();
  ti.showImage('Images/South.PNG')
  ti.output('Is it one of the larger states?');
   let largerSA = await ti.readYesOrNo ()
   if (largerSA == true){
    ti.clear();
    ti.showImage('Images/South.PNG')
    ti.output('Is it Virginia?');
     let virginia = await ti.readYesOrNo ()
     if (virginia == true){
      ti.clear();
      ti.showImage('Images/South.PNG')
      ti.output('The state was Virginia...now reset the page and go again!');
     }
    else{
     ti.clear();
     ti.showImage('Images/South.PNG')
     ti.output('The state was North Carolina...now reset the page and go again!');
    }
   }
  else{
   ti.clear();
   ti.showImage('Images/South.PNG')
   ti.output('Is it West Virginia?');
    let WV = await ti.readYesOrNo ()
    if (WV == true){
     ti.clear();
     ti.showImage('Images/South.PNG');
     ti.output('The state was West Virginia...now reset the page and go again!');
    }
    else{
     ti.clear();
     ti.showImage('Images/South.PNG');
     ti.output('Is it Deleware?');
      let deleware = await ti.readYesOrNo ()
      if (deleware == true){
       ti.clear();
       ti.showImage('Images/South.PNG');
       ti.output('The state was Delaware...now reset the page and go again!');
      }
      else{
       ti.clear();
       ti.showImage('Images/South.PNG');
       ti.output('The state was Maryland...now reset the page and go again!');
      }
    }
  }
 }
} 
}










if (region == 'Midwest') {
 ti.clear();
 ti.showImage('Images/Mid West.PNG');
 ti.output('Is it West North Central?');
  let WNC = await ti.readYesOrNo ()
  if (WNC == true){
   ti.clear();
   ti.showImage('Images/Mid West.PNG');
   ti.output('Is it one of the top three states?');
    let topMidwest = await ti.readYesOrNo ()
    if (topMidwest == true){
     ti.clear();
     ti.showImage('Images/Mid West.PNG');
     ti.output('Is it North Dakota?');
      let ND = await ti.readYesOrNo ()
      if (ND == true){
       ti.clear();
       ti.showImage('Images/Mid West.PNG');
       ti.output('The state was North Dakota...now reset the page and go again!');
      }
      else{
       ti.clear();
       ti.showImage('Images/Mid West.PNG');
       ti.output('Is it South Dakota?');
        let SD = await ti.readYesOrNo ()
        if (SD == true){
         ti.clear();
         ti.showImage('Images/Mid West.PNG');
         ti.output('The state was South Dakota...now reset the page and go again!');
        }
        else{
         ti.clear();
         ti.showImage('Images/Mid West.PNG');
         ti.output('The state was Minnesota...now reset the page and go again!');
        }
      }
    }
    else{
     ti.clear();
     ti.showImage('Images/Mid West.PNG');
     ti.output('Does it border the Western part of the US?');
      let borderWest = await ti.readYesOrNo ()
      if (borderWest == true){
       ti.clear();
       ti.showImage('Images/Mid West.PNG');
       ti.output('Is it Nebraska?');
        let nebraska = await ti.readYesOrNo ()
        if (nebraska == true){
         ti.clear();
         ti.showImage('Images/Mid West.PNG');
         ti.output('The state was Nebraska...now reset the page and go again!');
        }
        else{
         ti.clear();
         ti.showImage('Images/Mid West.PNG');
         ti.output('The state was Kansas...now reset the page and go again!');
        }
      }
      else{
       ti.clear();
       ti.showImage('Images/Mid West.PNG');
       ti.output('Is it Missouri?');
        let montana = await ti.readYesOrNo ()
        if (montana == true){
         ti.clear();
         ti.showImage('Images/Mid West.PNG');
         ti.output('The state was Missouri...now reset the page and go again!');
        }
        else{
         ti.clear();
         ti.showImage('Images/Mid West.PNG');
         ti.output('The state was Iowa...now reset the page and go again!');
        }
      }
    }
  }
  else{
   ti.clear();
   ti.showImage('Images/Mid West.PNG');
   ti.output('Is it east of Illinois?');
    let eastIl = await ti.readYesOrNo();
    if (eastIl == true){
     ti.clear();
     ti.showImage('Images/Mid West.PNG');
     ti.output('Is it Ohio.');
      let ohio = await ti.readYesOrNo();
      if (ohio == true){
       ti.clear();
       ti.showImage('Images/Mid West.PNG');
       ti.output('The state was Ohio...really...how original...now click off and never go again!');
      }else{
       ti.clear();
       ti.showImage('Images/Mid West.PNG');
       ti.output('Is it Indiana?');
        let indiana = await ti.readYesOrNo();
        if(indiana == true){
         ti.clear();
         ti.showImage('Images/Mid West.PNG');
         ti.output('The state was Indiana...now reset the page and go again!');
        }else{
         ti.clear();
         ti.showImage('Images/Mid West.PNG');
         ti.output('The state was Michigan...now reset the page and go again!');
        }
      }
    }else{
     ti.clear();
     ti.showImage('Images/Mid West.PNG');
     ti.output('Is it Illinois?');
      let illinois = await ti.readYesOrNo();
      if (illinois == true){
       ti.clear();
       ti.showImage('Images/Mid West.PNG');
       ti.output('The state was Illinois...now reset the page and go again!');
      }else{
       ti.clear();
       ti.showImage('Images/Mid West.PNG');
       ti.output('The state was Wisconsin...now reset the page and go again!');
      }
    }
  }
}








if (region == 'West') {
 ti.clear();
 ti.showImage('Images/West.PNG');
 ti.output('Is it Pacific?');
  let pacific = await ti.readYesOrNo();
  if (pacific == true){
   ti.clear();
   ti.showImage('Images/West.PNG');
   ti.output('Is it north of California?');
    let northcalifornia = await ti.readYesOrNo();
    if (northcalifornia == true){
     ti.clear();
     ti.showImage('Images/West.PNG');
     ti.output('Is it Oregon?');
      let oregon = await ti.readYesOrNo();
      if (oregon == true){
       ti.clear();
       ti.showImage('Images/West.PNG');
       ti.output('The state was Oregon...now reset the page and go again!');
      }else{
      ti.clear();
       ti.showImage('Images/West.PNG');
       ti.output('The state was Washington...now reset the page and go again!');
      }
    }else{
     ti.clear();
     ti.showImage('Images/West.PNG');
     ti.output('Ah, California. The land of WIDTH: Wildfires, Influencers, Drought, Traffic, and Homelessness.');
    }
  }else{
   ti.clear();
   ti.showImage('Images/West.PNG');
   ti.output('Is it part of the four corners?');
    let fourcorners = await ti.readYesOrNo();
    if (fourcorners == true){
     ti.clear();
     ti.showImage('Images/West.PNG');
     ti.output('Does it border Mexico?');
      let mexico = await ti.readYesOrNo();
      if (mexico == true){
       ti.clear();
       ti.showImage('Images/West.PNG');
       ti.output('Is it Arizona?');
        let arizona = await ti.readYesOrNo();
        if (arizona == true){
         ti.clear();
         ti.showImage('Images/West.PNG');
         ti.output('The state was Arizona...now reset the page and go again!');
        }else{
         ti.clear();
         ti.showImage('Images/West.PNG');
         ti.output('The state was New Mexico...now reset the page and go again!');
        }
      }else{
       ti.clear();
       ti.showImage('Images/West.PNG');
       ti.output('Is it Utah?');
        let utah = await ti.readYesOrNo();
        if (utah == true){
         ti.clear();
         ti.showImage('Images/West.PNG');
         ti.output('Reset the page to play again.');
        }else{
         ti.clear();
         ti.showImage('Images/West.PNG');
         ti.output('The state was Colorado...now reset the page and go again.');
        }
      }
    
    }else{
     ti.clear();
     ti.showImage('Images/West.PNG');
     ti.output('Does it border Canada?');
      let canada = await ti.readYesOrNo();
      if (canada == true){
       ti.clear();
       ti.showImage('Images/West.PNG');
       ti.output('Is it Idaho?');
        let idaho = await ti.readYesOrNo();
          if (idaho == true){
         ti.clear();
         ti.showImage('Images/West.PNG');
         ti.output('The state was Idaho...now reset the page and go again');
          }else{
           ti.clear();
           ti.showImage('Images/West.PNG');
           ti.output('The state was Montana...now reset the page and go again!');
          }
        }else{
       ti.clear();
       ti.showImage('Images/West.PNG');
       ti.output('Is it Nevada?');
        let nevada = await ti.readYesOrNo();
        if (nevada == true){
         ti.clear();
         ti.showImage('Images/West.PNG');
         ti.output('The state was Nevada...now reset the page and go again!');
        }else{
         ti.clear();
         ti.showImage('Images/West.PNG');
         ti.output('The state was Wyoming...now reset the page and go again!');
        }
      }
    }
  }
}
if (region == 'Alaska/Hawaii'){
 ti.clear();
 ti.showImage('Images/Map.PNG');
 ti.output('Is it Alaska?');
  let alaska = await ti.readYesOrNo();
  if (alaska == true){
   ti.clear();
   ti.showImage('Images/Map.PNG');
   ti.output('Yay, refresh to play again!');
  }else{
   ti.clear();
   ti.showImage('Images/Map.PNG');
   ti.output('The state was Hawaii...now reset the page and play again!');
    
  }
}