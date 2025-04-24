//Funcao para puxar informacao do json para o header
function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const localization = document.getElementById("profile.localization");
  localization.innerText = profileData.localization;

  const linkedin = document.getElementById("profile.linkedin");
  linkedin.innerText = profileData.linkedin;

  const github = document.getElementById("profile.github");
  github.innerText = profileData.github;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}
//Funcao para puxar informacao do json para o skills personal
function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}
//Funcao para puxar informacao do json para o skills Profisisonal
function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map((skill) => `<img src="$${skill.logo}" alt="${skill.name}" title="${skill.name}">`)
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
})();
