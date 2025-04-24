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




}

(async  () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()