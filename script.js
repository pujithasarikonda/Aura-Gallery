/* Aura Gallery — category data, filters, favorites, and lightbox */
"use strict";

const CATEGORIES = [
  { id: "art", name: "Paintings & Art", short: "Art", description: "Color, texture, and imagination.", cover: "photo-1579783902614-a3fb3927b6a5" },
  { id: "animals", name: "Animals", short: "Animals", description: "Little personalities and wild wonders.", cover: "photo-1517849845537-4d257902454a" },
  { id: "nature", name: "Nature & Landscapes", short: "Nature", description: "Quiet places and open skies.", cover: "photo-1470252649378-9c29740c9fa8" },
  { id: "decor", name: "Home Décor", short: "Décor", description: "Spaces made warm and personal.", cover: "photo-1616486338812-3dadae4b4ace" },
  { id: "travel", name: "Travel & Places", short: "Travel", description: "Places that stay with you.", cover: "photo-1516483638261-f4dbaf036963" },
  { id: "food", name: "Food", short: "Food", description: "A feast for the eyes and senses.", cover: "photo-1490645935967-10de6ba17061" },
  { id: "fashion", name: "Fashion & Lifestyle", short: "Fashion", description: "Personal style and everyday details.", cover: "photo-1483985988355-763728e1935b" },
  { id: "flowers", name: "Flowers", short: "Flowers", description: "Petals, colors, and seasonal beauty.", cover: "photo-1490750967868-88aa4486c946" }
];

const photo = (id, width = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const makeItems = (category, records) => records.map((record, index) => ({
  id: `${category}-${index + 1}`,
  category,
  title: record[0],
  description: record[1],
  image: record[2],
  alt: record[3] || record[0]
}));

// Five images per category (40 total). Images are remotely hosted by Unsplash.
const IMAGES = [
  ...makeItems("art", [
    ["Color in Motion", "Expressive colors and painterly texture.", "photo-1579783902614-a3fb3927b6a5"],
    ["Gallery Study", "A quiet look at a work of art.", "photo-1577083552431-6e5fd01aa342"],
    ["Modern Canvas", "Art that makes a room feel alive.", "photo-1541961017774-22349e4a1262"],
    ["Creative Layers", "A playful mix of color and form.", "photo-1549490349-8643362247b5"],
    ["The Artful Corner", "A little inspiration for your walls.", "photo-1578301978693-85fa9c0320b9"]
  ]),
  ...makeItems("animals", [
    ["A Friendly Face", "A joyful companion captured in a moment.", "photo-1517849845537-4d257902454a"],
    ["Curious Cat", "A curious gaze and a quiet pause.", "photo-1514888286974-6c03e2ca1dba"],
    ["Little Explorer", "A furry friend ready for an adventure.", "photo-1552053831-71594a27632d"],
    ["Wild at Heart", "The beauty of wildlife in its own world.", "photo-1500530855697-b586d89ba3ee"],
    ["Feathered Friend", "A small detail from the natural world.", "photo-1444464666168-49d633b86797"]
  ]),
  ...makeItems("nature", [
    ["Golden Hour", "The landscape glows as the day begins.", "photo-1470252649378-9c29740c9fa8"],
    ["Mountain Stillness", "A peaceful view into the mountains.", "photo-1464822759023-fed622ff2c3b"],
    ["Into the Forest", "Green trails and a breath of fresh air.", "photo-1448375240586-882707db888b"],
    ["Blue Horizons", "A wide-open view of sea and sky.", "photo-1500375592092-40eb2168fd21"],
    ["Alpine Reflection", "A mountain mirrored in clear water.", "photo-1501785888041-af3ef285b470"]
  ]),
  ...makeItems("decor", [
    ["A Cozy Corner", "Natural textures and warm afternoon light.", "photo-1616486338812-3dadae4b4ace"],
    ["Quiet Living", "A considered space with room to breathe.", "photo-1600210492486-724fe5c67fb0"],
    ["Collected Objects", "Decor details that tell a story.", "photo-1618221195710-dd6b41faaea6"],
    ["Soft Minimalism", "Simple shapes and gentle colors.", "photo-1600607687939-ce8a6c25118c"],
    ["Plant-Filled Home", "A little greenery makes a difference.", "photo-1615874694520-474822394e73"]
  ]),
  ...makeItems("travel", [
    ["Coastal Escape", "Colorful houses above a blue coastline.", "photo-1516483638261-f4dbaf036963"],
    ["Island Light", "Sunlit buildings and calm Mediterranean water.", "photo-1533105079780-92b9be482077"],
    ["City Wandering", "Discovering a new place one street at a time.", "photo-1519608487953-e999c86e7455"],
    ["Mountain Road", "A winding route through grand scenery.", "photo-1464822759023-fed622ff2c3b"],
    ["Blue-Domed Dreams", "A bright coastal view worth remembering.", "photo-1530789253388-582c481c54b0"]
  ]),
  ...makeItems("food", [
    ["Fresh & Colorful", "A colorful bowl full of fresh ingredients.", "photo-1490645935967-10de6ba17061"],
    ["Sweet Morning", "A delicious start to a slow morning.", "photo-1490474418585-ba9bad8fd0ea"],
    ["Berry Season", "Fresh berries in their natural colors.", "photo-1490645935967-10de6ba17061"],
    ["Pasta Night", "A comforting favorite, beautifully served.", "photo-1473093295043-cdd812d0e601"],
    ["Coffee Moment", "A warm drink and a moment to pause.", "photo-1509042239860-f550ce710b93"]
  ]),
  ...makeItems("fashion", [
    ["Everyday Style", "Effortless pieces with personal character.", "photo-1483985988355-763728e1935b"],
    ["The Details", "Accessories that complete a look.", "photo-1529139574466-a303027c1d8b"],
    ["Soft Neutrals", "A timeless palette for everyday outfits.", "photo-1483985988355-763728e1935b"],
    ["A Little Elegance", "Simple details with a polished finish.", "photo-1490481651871-ab68de25d43d"],
    ["Weekend Mood", "Comfortable style for unhurried days.", "photo-1515886657613-9f3515b0c78f"]
  ]),
  ...makeItems("flowers", [
    ["Blush Petals", "Soft pink blooms in gentle light.", "photo-1490750967868-88aa4486c946"],
    ["Wildflower Morning", "A field of color touched by sunlight.", "photo-1462275646964-a0e3386b89fa"],
    ["Sunflower Days", "Bright petals that feel like sunshine.", "photo-1470509037663-253afd7f0f51"],
    ["Garden Roses", "A timeless flower in full bloom.", "photo-1518895949257-7621c3c786d7"],
    ["Lavender Fields", "A calming stretch of purple blooms.", "photo-1499002238440-d264edd596ec"]
  ])
].map(item => ({ ...item, image: photo(item.image.includes(" ") ? "photo-1500530855697-b586d89ba3ee" : item.image, 900) }));

// Correct any accidental placeholder IDs before they are used in image requests.
IMAGES.find(item => item.id === "animals-4").image = photo("photo-1500530855697-b586d89ba3ee", 900);
IMAGES.find(item => item.id === "food-3").image = photo("photo-1490645935967-10de6ba17061", 900);

const state = { category: "all", query: "", favoritesOnly: false, favorites: new Set(), lightboxItems: [], lightboxIndex: 0, lastFocus: null };
const $ = selector => document.querySelector(selector);
const categoryById = id => CATEGORIES.find(category => category.id === id);
const imageById = id => IMAGES.find(item => item.id === id);

const categoryGrid = $("#categoryGrid");
const filterList = $("#filterList");
const imageGrid = $("#imageGrid");
const imageCount = $("#imageCount");
const emptyState = $("#emptyState");
const searchInput = $("#searchInput");
const clearSearch = $("#clearSearch");
const lightbox = $("#lightbox");
const toast = $("#toast");
let toastTimer;

function safeText(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderCategories() {
  categoryGrid.innerHTML = CATEGORIES.map(category => {
    const count = IMAGES.filter(item => item.category === category.id).length;
    return `<button class="category-card" type="button" data-category="${category.id}" aria-label="Explore ${safeText(category.name)}">
      <img src="${photo(category.cover, 600)}" alt="${safeText(category.name)}" loading="lazy">
      <span class="category-copy"><strong>${safeText(category.name)}</strong><span>${count}+ images</span></span>
      <span class="category-arrow" aria-hidden="true">↗</span>
    </button>`;
  }).join("");
}

function renderFilters() {
  const options = [{ id: "all", name: "All images" }, ...CATEGORIES.map(category => ({ id: category.id, name: category.name }))];
  filterList.innerHTML = options.map(option => `<button class="filter-chip ${state.category === option.id ? "active" : ""}" type="button" data-filter="${option.id}" aria-pressed="${state.category === option.id}">${safeText(option.name)}</button>`).join("");
}

function getVisibleImages() {
  const query = state.query.trim().toLowerCase();
  return IMAGES.filter(item => {
    const category = categoryById(item.category);
    const matchesCategory = state.category === "all" || item.category === state.category;
    const matchesFavorites = !state.favoritesOnly || state.favorites.has(item.id);
    const matchesQuery = !query || `${item.title} ${item.description} ${category.name} ${category.description}`.toLowerCase().includes(query);
    return matchesCategory && matchesFavorites && matchesQuery;
  });
}

function renderGallery() {
  const visible = getVisibleImages();
  const category = categoryById(state.category);
  $("#galleryTitle").textContent = state.favoritesOnly ? "Your favorites" : category ? category.name : "Handpicked for you";
  $("#gallerySubtitle").textContent = state.favoritesOnly ? "The images you've saved for another look." : category ? category.description : "A collection of lovely things, gathered in one place.";
  imageCount.textContent = `${visible.length} ${visible.length === 1 ? "image" : "images"}`;
  emptyState.hidden = visible.length > 0;
  imageGrid.hidden = visible.length === 0;
  imageGrid.innerHTML = visible.map(item => {
    const categoryName = categoryById(item.category).name;
    const favorite = state.favorites.has(item.id);
    return `<article class="image-card" tabindex="0" role="button" data-open="${item.id}" aria-label="Open ${safeText(item.title)}">
      <img src="${item.image}" alt="${safeText(item.alt)}" loading="lazy" data-image-id="${item.id}">
      <div class="image-card-info"><strong>${safeText(item.title)}</strong><span>${safeText(categoryName)}</span></div>
      <button class="favorite-button card-favorite ${favorite ? "is-favorite" : ""}" type="button" data-favorite="${item.id}" aria-label="${favorite ? "Remove from" : "Add to"} favorites" aria-pressed="${favorite}">${favorite ? "♥" : "♡"}</button>
    </article>`;
  }).join("");
  imageGrid.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.classList.add("image-error");
      img.alt = `${img.alt} (image unavailable)`;
      const card = img.closest(".image-card");
      if (card && !card.querySelector(".image-fallback")) {
        const fallback = document.createElement("span");
        fallback.className = "image-fallback";
        fallback.textContent = "Image unavailable";
        card.appendChild(fallback);
      }
    }, { once: true });
  });
}

function applyCategory(categoryId) {
  state.category = categoryId;
  state.favoritesOnly = false;
  $("#showFavorites").classList.remove("active");
  renderFilters();
  renderGallery();
}

function toggleFavorite(id) {
  const item = imageById(id);
  if (!item) return;
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast("Removed from favorites");
  } else {
    state.favorites.add(id);
    showToast("Added to favorites");
  }
  renderGallery();
  if (!lightbox.hidden && state.lightboxItems[state.lightboxIndex]?.id === id) updateLightboxFavorite();
}

function updateLightboxFavorite() {
  const item = state.lightboxItems[state.lightboxIndex];
  if (!item) return;
  const isFavorite = state.favorites.has(item.id);
  $("#lightboxFavorite").textContent = isFavorite ? "♥" : "♡";
  $("#lightboxFavorite").classList.toggle("is-favorite", isFavorite);
  $("#lightboxFavorite").setAttribute("aria-label", isFavorite ? "Remove from favorites" : "Add to favorites");
}

function openLightbox(id) {
  const visible = getVisibleImages();
  const index = visible.findIndex(item => item.id === id);
  if (index < 0) return;
  state.lastFocus = document.activeElement;
  state.lightboxItems = visible;
  state.lightboxIndex = index;
  lightbox.hidden = false;
  document.body.classList.add("no-scroll");
  updateLightbox();
  $("#lightboxClose").focus();
}

function updateLightbox() {
  const item = state.lightboxItems[state.lightboxIndex];
  if (!item) return;
  const image = $("#lightboxImage");
  const loading = $("#lightboxLoading");
  image.style.display = "none";
  loading.hidden = false;
  image.onload = () => { image.style.display = "block"; loading.hidden = true; };
  image.onerror = () => { loading.textContent = "This image could not be loaded."; loading.hidden = false; image.style.display = "none"; };
  image.src = item.image;
  image.alt = item.alt;
  $("#lightboxCategory").textContent = categoryById(item.category).name;
  $("#lightboxTitle").textContent = item.title;
  $("#lightboxDescription").textContent = item.description;
  $("#lightboxPosition").textContent = `${state.lightboxIndex + 1} / ${state.lightboxItems.length}`;
  $("#lightboxPrev").disabled = state.lightboxItems.length < 2;
  $("#lightboxNext").disabled = state.lightboxItems.length < 2;
  updateLightboxFavorite();
}

function moveLightbox(direction) {
  if (state.lightboxItems.length < 2) return;
  state.lightboxIndex = (state.lightboxIndex + direction + state.lightboxItems.length) % state.lightboxItems.length;
  updateLightbox();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("no-scroll");
  if (state.lastFocus && typeof state.lastFocus.focus === "function") state.lastFocus.focus();
}

function showFavorites() {
  state.favoritesOnly = true;
  state.category = "all";
  renderFilters();
  renderGallery();
  $("#showFavorites").classList.add("active");
  $("#gallery").scrollIntoView({ behavior: "smooth" });
}

function resetGallery() {
  state.category = "all";
  state.query = "";
  state.favoritesOnly = false;
  searchInput.value = "";
  clearSearch.hidden = true;
  $("#showFavorites").classList.remove("active");
  renderFilters();
  renderGallery();
}

categoryGrid.addEventListener("click", event => {
  const card = event.target.closest("[data-category]");
  if (!card) return;
  applyCategory(card.dataset.category);
  $("#gallery").scrollIntoView({ behavior: "smooth" });
});
filterList.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  applyCategory(button.dataset.filter);
});
imageGrid.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    event.stopPropagation();
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }
  const card = event.target.closest("[data-open]");
  if (card) openLightbox(card.dataset.open);
});
imageGrid.addEventListener("keydown", event => {
  const card = event.target.closest("[data-open]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    if (event.target.closest("[data-favorite]")) return;
    event.preventDefault();
    openLightbox(card.dataset.open);
  }
});
searchInput.addEventListener("input", () => {
    state.query = searchInput.value.trim().toLowerCase();
    clearSearch.hidden = state.query.length === 0;
    state.favoritesOnly = false;
    $("#showFavorites").classList.remove("active");
    renderGallery();
});
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  state.query = "";
  clearSearch.hidden = true;
  renderGallery();
  searchInput.focus();
});
$("#showFavorites").addEventListener("click", showFavorites);
$("#resetGallery").addEventListener("click", resetGallery);
$("#lightboxClose").addEventListener("click", closeLightbox);
$("#lightboxPrev").addEventListener("click", () => moveLightbox(-1));
$("#lightboxNext").addEventListener("click", () => moveLightbox(1));
$("#lightboxFavorite").addEventListener("click", () => {
  const item = state.lightboxItems[state.lightboxIndex];
  if (item) toggleFavorite(item.id);
});
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => {
  if (!lightbox.hidden) {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  }
});
const menuToggle = $("#menuToggle");
menuToggle.addEventListener("click", () => {
  const isOpen = $("#mainNav").classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
$("#mainNav").addEventListener("click", event => {
  if (event.target.closest("a")) {
    $("#mainNav").classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }
});

$("#year").textContent = new Date().getFullYear();
renderCategories();
renderFilters();
renderGallery();
