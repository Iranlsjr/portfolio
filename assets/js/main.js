function updateProfileInfo(profileData){
    const  photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name


    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const localization = document.getElementById('profile.localization')
    localization.innerText = profileData.localization
    
    const linkedin = document.getElementById('profile.linkedin')
    linkedin.innerText = profileData.linkedin

    const github = document.getElementById('profile.github')
    github.innerText = profileData.github
    
    const phone  = document.getElementById('profile.phone')
    phone.innerText = profileData.phone

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email




}

(async  () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()