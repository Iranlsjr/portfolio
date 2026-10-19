//Funcao para buscar os dados do json
async function fetchProfileData() {
  const response = await fetch("data.json"); // caminho relativo ao index.html
  if (!response.ok) {
    throw new Error(`data.json retornou HTTP ${response.status}`);
  }
  return response.json();
}

//Funcao para puxar informacao do json para o header
function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  if (!photo) return; // o HTML ainda não tem esse id — não quebra
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  if (name) name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  if (job) job.innerText = profileData.job;

  const localization = document.getElementById("profile.localization");
  if (localization) localization.innerText = profileData.localization;

  const linkedin = document.getElementById("profile.linkedin");
  if (linkedin) linkedin.innerText = profileData.linkedin;

  const github = document.getElementById("profile.github");
  if (github) github.innerText = profileData.github;

  const phone = document.getElementById("profile.phone");
  if (phone) phone.innerText = profileData.phone;

  const email = document.getElementById("profile.email");
  if (email) {
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
  }
}

//Funcao para puxar informacao do json para o skills personal
function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.softSkills");
  if (!softSkills) return;
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

//Funcao para puxar informacao do json para o skills Profisisonal
function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.hardSkills");
  if (!hardSkills) return;
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    )
    .join("");
}

//Funcao para puxar informacao do json para o idiomas
function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  if (!languages) return;
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  if (!portfolio) return;
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
            <li>
          <h3 ${project.github ? 'class="github"' : ""}>${project.name}</h3>
          <a href="${project.url}" target="_blank">Clique para acessar o site</a>
        </li>`;
    })
    .join("");
}

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById("profile.professionalExperience");
  if (!professionalExperience) return;
  professionalExperience.innerHTML = profileData.professionalExperience
    .map((experience) => {
      return `
    <li>
        <h3 class="title">${experience.name}</h3>
        <p class="period">${experience.period}</p>
        <p>${experience.description}</p>
      </li>
    `;
    })
    .join("");
}

//Funcao para puxar informacao do json para a stack
function updateStack(profileData) {
  const stack = document.getElementById("profile.stack");
  if (!stack) return;
  stack.innerHTML =
    "<b>Stack</b>" +
    profileData.stack
      .map((item) =>
        item.tip
          ? `<span tabindex="0" data-tip="${item.tip}">${item.name}</span>`
          : `<span>${item.name}</span>`
      )
      .join("");
}

(async () => {
  try {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
    updateStack(profileData);
  } catch (error) {
    console.error("Erro ao carregar os dados do portfolio:", error);
  }
})();