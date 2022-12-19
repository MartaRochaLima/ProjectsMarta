async function getActivities() {

    const resp = await fetch('https://www.boredapi.com/api/activity');
 
    const data = await resp.json();
 
     const activity= data.activity
     const type= data.type
     const participants= data.participants

     
     const divResults = document.getElementById('infoBox')
     
     
     divResults.innerText =''
     let activityTitle = document.createElement('h3')
     activityTitle.innerText = " Activity: " + activity
     let activityType = document.createElement('p')
     activityType.innerText = " Type: " + type
     let activitiesPart =document.createElement('p')
     activitiesPart.innerText = " How many people: " + participants
    
     divResults.appendChild(activityTitle)
     divResults.appendChild(activityType)
     divResults.appendChild(activitiesPart)
}

   
     const moreInformation = document.getElementById('infoFooter')

     let moreInfo =document.createElement('p')
     moreInfo.innerText = " Don't forget to call all your friends, contact them all on Social Network and have a great time together!!"
     moreInfo.setAttribute('class','ftInfo')
     let logoImage = document.createElement('img')
     logoImage.setAttribute('src','figura-2.png')
     logoImage.setAttribute('class','logoNetwork')
 
     infoFooter.appendChild(moreInfo)
     infoFooter.appendChild(logoImage)



getActivities();

