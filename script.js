const defaultConfig = {
  page_title: "Thayna",
  inicio_title: "Início",
  eu_title: "Thay",
  eu_description: "",
  jesus_title: "Jesus",
  jesus_description: "",
  estudos_title: "Estudos",
  estudos_description: "",
  familia_title: "Família",
  familia_description: "",
  amigos_title: "Amigos",
  amigos_description: "",
  gallery_title: "",
  background_color: "#e1bee7",
  surface_color: "#ffffff",
  text_color: "#4a148c",
  primary_action_color: "#7b1fa2",
  secondary_action_color: "#e1bee7",
  font_family: "Georgia",
  font_size: 16
};

const photoEmojis = {
  eu: ["📸", "🌟", "💫", "✨", "🎨", "🎭", "🎪", "🎬", "📷"],
  jesus: ["✝️", "🙏", "⛪", "📖", "🕊️", "💒", "🌅", "🌄", "⭐"],
  estudos: ["📚", "📖", "✏️", "📝", "🎓", "🏫", "💡", "🔬", "🧪"],
  familia: ["👨‍👩‍👧‍👦", "❤️", "🏠", "🎂", "🎉", "🎈", "🎁", "🌸", "🌺"],
  amigos: ["👥", "🎉", "🎊", "🎈", "🎭", "🎪", "🎨", "🎮", "🎲"],
  gallery: ["📷", "🖼️", "🎨", "🌈", "🌟", "💫", "✨", "🎭", "🎪"]
};

function createPhotoPlaceholders(containerId, emojiSet) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const placeholder = document.createElement('div');
    placeholder.className = 'photo-placeholder';
    placeholder.textContent = emojiSet[i];
    container.appendChild(placeholder);
  }
}

createPhotoPlaceholders('eu-photos', photoEmojis.eu);
createPhotoPlaceholders('jesus-photos', photoEmojis.jesus);
createPhotoPlaceholders('estudos-photos', photoEmojis.estudos);
createPhotoPlaceholders('familia-photos', photoEmojis.familia);
createPhotoPlaceholders('amigos-photos', photoEmojis.amigos);
createPhotoPlaceholders('gallery-photos', photoEmojis.gallery);

const menuToggle = document.getElementById('menuToggle');
const menuTabs = document.getElementById('menuTabs');
const menuOverlay = document.getElementById('menuOverlay');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

function openMenu() {
  menuTabs.classList.add('open');
  menuOverlay.classList.add('show');
}

function closeMenu() {
  menuTabs.classList.remove('open');
  menuOverlay.classList.remove('show');
}

menuToggle.addEventListener('click', () => {
  if (menuTabs.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuOverlay.addEventListener('click', closeMenu);

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');
    
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    button.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
    
    closeMenu();
  });
});

async function onConfigChange(config) {
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'Georgia, serif';
  const fontFamily = `${customFont}, ${baseFontStack}`;
  const baseSize = config.font_size || defaultConfig.font_size;
  
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;

  document.body.style.background = `linear-gradient(135deg, ${backgroundColor} 0%, ${primaryActionColor} 100%)`;
  document.body.style.fontFamily = fontFamily;

  const pageTitle = document.getElementById('page-title');
  pageTitle.textContent = config.page_title || defaultConfig.page_title;
  pageTitle.style.fontSize = `${baseSize * 4}px`;
  pageTitle.style.color = textColor;
  pageTitle.style.fontFamily = "'Dancing Script', cursive";
  pageTitle.style.fontWeight = "700";

  const tabButtonElements = document.querySelectorAll('.tab-button');
  const tabTitles = [
    config.inicio_title || defaultConfig.inicio_title,
    config.eu_title || defaultConfig.eu_title,
    config.jesus_title || defaultConfig.jesus_title,
    config.estudos_title || defaultConfig.estudos_title,
    config.familia_title || defaultConfig.familia_title,
    config.amigos_title || defaultConfig.amigos_title
  ];
  
  tabButtonElements.forEach((button, index) => {
    button.textContent = tabTitles[index];
    button.style.fontSize = `${baseSize * 1.125}px`;
    button.style.fontFamily = fontFamily;
    button.style.color = textColor;
    button.style.background = surfaceColor;
    
    if (button.classList.contains('active')) {
      button.style.background = primaryActionColor;
      button.style.color = surfaceColor;
    }
  });

  tabButtonElements.forEach(button => {
    button.addEventListener('mouseenter', function() {
      if (!this.classList.contains('active')) {
        this.style.background = secondaryActionColor;
      }
    });
    button.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.background = surfaceColor;
      }
    });
  });

  const tabContentElements = document.querySelectorAll('.tab-content');
  tabContentElements.forEach(content => {
    content.style.background = surfaceColor;
  });

  document.getElementById('eu-description').textContent = config.eu_description || defaultConfig.eu_description;
  document.getElementById('jesus-description').textContent = config.jesus_description || defaultConfig.jesus_description;
  document.getElementById('estudos-description').textContent = config.estudos_description || defaultConfig.estudos_description;
  document.getElementById('familia-description').textContent = config.familia_description || defaultConfig.familia_description;
  document.getElementById('amigos-description').textContent = config.amigos_description || defaultConfig.amigos_description;

  const descriptions = document.querySelectorAll('.tab-description');
  descriptions.forEach(desc => {
    desc.style.fontSize = `${baseSize * 1.25}px`;
    desc.style.color = textColor;
    desc.style.fontFamily = fontFamily;
  });

  const galleryTitle = document.getElementById('gallery-title');
  galleryTitle.textContent = config.gallery_title || defaultConfig.gallery_title;
  galleryTitle.style.fontSize = `${baseSize * 2.25}px`;
  galleryTitle.style.color = textColor;
  galleryTitle.style.fontFamily = fontFamily;

  document.querySelector('.gallery-section').style.background = surfaceColor;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        },
        {
          get: () => config.surface_color || defaultConfig.surface_color,
          set: (value) => {
            config.surface_color = value;
            window.elementSdk.setConfig({ surface_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        },
        {
          get: () => config.primary_action_color || defaultConfig.primary_action_color,
          set: (value) => {
            config.primary_action_color = value;
            window.elementSdk.setConfig({ primary_action_color: value });
          }
        },
        {
          get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
          set: (value) => {
            config.secondary_action_color = value;
            window.elementSdk.setConfig({ secondary_action_color: value });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => {
          config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }),
    mapToEditPanelValues: (config) => new Map([
      ["page_title", config.page_title || defaultConfig.page_title],
      ["inicio_title", config.inicio_title || defaultConfig.inicio_title],
      ["eu_title", config.eu_title || defaultConfig.eu_title],
      ["eu_description", config.eu_description || defaultConfig.eu_description],
      ["jesus_title", config.jesus_title || defaultConfig.jesus_title],
      ["jesus_description", config.jesus_description || defaultConfig.jesus_description],
      ["estudos_title", config.estudos_title || defaultConfig.estudos_title],
      ["estudos_description", config.estudos_description || defaultConfig.estudos_description],
      ["familia_title", config.familia_title || defaultConfig.familia_title],
      ["familia_description", config.familia_description || defaultConfig.familia_description],
      ["amigos_title", config.amigos_title || defaultConfig.amigos_title],
      ["amigos_description", config.amigos_description || defaultConfig.amigos_description],
      ["gallery_title", config.gallery_title || defaultConfig.gallery_title]
    ])
  });
}