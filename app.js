const imageSets = {
  face: [
    "photo-1608248543803-ba4f8c70ae0b", "photo-1556228720-195a672e8a03", "photo-1601049541289-9b1b7bbbfe19", "photo-1611930022073-b7a4ba5fcccd", "photo-1598440947619-2c35fc9aa908", "photo-1570172619644-dfd03ed5d881", "photo-1556229010-6c3f2c9ca5f8", "photo-1612817288484-6f916006741a"
  ],
  lips: ["photo-1586495777744-4413f21062fa", "photo-1608248543803-ba4f8c70ae0b", "photo-1596462502278-27bfdc403348", "photo-1612817288484-6f916006741a"],
  body: ["photo-1601049541289-9b1b7bbbfe19", "photo-1556228720-195a672e8a03", "photo-1608248543803-ba4f8c70ae0b", "photo-1598440947619-2c35fc9aa908"],
  sun: ["photo-1556229010-6c3f2c9ca5f8", "photo-1608248543803-ba4f8c70ae0b", "photo-1611930022073-b7a4ba5fcccd"],
  tools: ["photo-1570172619644-dfd03ed5d881", "photo-1596462502278-27bfdc403348", "photo-1612817288484-6f916006741a"]
};

const catalog = [
  ["face", "Cloud Nine Gel Cleanser", "A soft, no-stripping daily cleanse", 18, "Bestseller"],
  ["face", "Dew Point Hydrating Serum", "A drink of water for thirsty skin", 28, "Bestseller"],
  ["face", "Daylight Vitamin C Drops", "Brighten up, one drop at a time", 32, "New"],
  ["face", "Soft Focus Moisturizer", "A cushiony, everyday face cream", 26, ""],
  ["face", "First Light Eye Gel", "A cool little wake-up for tired eyes", 22, ""],
  ["face", "Good Night Retinol Serum", "A gentle overnight smoothing serum", 34, ""],
  ["face", "Cleansing Milk Face Wash", "A milky rinse for sensitive skin", 20, ""],
  ["face", "Watermelon Glow Gel Cream", "Weightless hydration with a fresh feel", 24, "Bestseller"],
  ["face", "Clear Skies Blemish Gel", "A targeted touch for breakout days", 16, ""],
  ["face", "Calm Down Barrier Cream", "Comfort for skin having a moment", 29, ""],
  ["face", "Rosewater Face Mist", "A soft, refreshing skin pick-me-up", 17, ""],
  ["face", "Cloud Melt Cleansing Balm", "Melts away makeup, leaves skin happy", 23, ""],
  ["face", "Peptide Plump Serum", "A bouncy boost for a dewy finish", 35, "New"],
  ["face", "Oat Milk Toner", "A calming first layer after cleansing", 21, ""],
  ["face", "Bright Side Exfoliating Pads", "A smooth, easy weekly reset", 27, ""],
  ["face", "Barrier Bestie Face Oil", "A few drops of soft, lasting glow", 31, ""],
  ["face", "Matcha Pore Clay Mask", "A fresh start for congested skin", 25, ""],
  ["face", "Overnight Bounce Sleeping Mask", "Wake up to softer-feeling skin", 30, ""],
  ["lips", "Sunday Soft Lip Balm", "A comfy little pocket essential", 12, "Bestseller"],
  ["lips", "Main Character Lipstick", "A creamy swipe of just-right color", 21, "New"],
  ["lips", "Petal Tint Lip Oil", "A glossy tint with a plush feel", 19, ""],
  ["lips", "Sugar Kiss Lip Scrub", "A gentle polish for soft lips", 14, ""],
  ["lips", "Barely There Lip Liner", "Your lips, with a little definition", 15, ""],
  ["lips", "Cherry On Top Lip Gloss", "A glassy finish with a rosy tint", 18, ""],
  ["lips", "Overnight Lip Cocoon", "A bedtime blanket for your lips", 17, ""],
  ["lips", "Cloud Color Lip Mousse", "Soft-focus color that feels weightless", 22, ""],
  ["lips", "Everyday Lip Crayon", "Easy color for on-the-go days", 20, ""],
  ["body", "Sunday Body Butter", "Rich, whipped moisture from head to toe", 28, "Bestseller"],
  ["body", "After Sun Aloe Gel", "A cool, soothing after-sun moment", 19, ""],
  ["body", "Silky Skin Body Wash", "A gentle, good-morning shower gel", 20, ""],
  ["body", "Soft Steps Hand Cream", "An anytime treat for busy hands", 14, ""],
  ["body", "Slow Morning Body Oil", "A silky finish after your shower", 32, ""],
  ["body", "Fresh Start Body Polish", "A smooth, feel-good weekly scrub", 24, ""],
  ["body", "Cloud Cover Body Lotion", "Light daily moisture that sinks right in", 23, ""],
  ["body", "Happy Place Bath Soak", "A little reset at the end of the day", 18, ""],
  ["sun", "Sun Day SPF 50 Face Fluid", "Lightweight daily broad-spectrum SPF", 27, "Bestseller"],
  ["sun", "Glow Guard SPF 30 Lip Balm", "Soft lips with a little sun defense", 13, ""],
  ["sun", "Easy Does It SPF 40 Gel", "A breathable, no-fuss face sunscreen", 29, "New"],
  ["sun", "Sunny Side Mineral SPF 50", "A gentle mineral sunscreen for every day", 31, ""],
  ["sun", "Cloud Shade SPF 30 Stick", "Pocket-size sun cover for touch-ups", 18, ""],
  ["sun", "After Hours After-Sun Cream", "Comforting moisture for sun-kissed skin", 22, ""],
  ["tools", "The Soft Touch Cleansing Cloth", "A little cloth, a lovely clean", 10, ""],
  ["tools", "Cool Down Facial Roller", "A chilled-out minute for your face", 24, "Bestseller"],
  ["tools", "Slow Sunday Gua Sha", "A smooth stone for a slower ritual", 26, ""],
  ["tools", "Good Hair Skin Headband", "Keep the little hairs out of your way", 12, ""],
  ["tools", "The Everyday Makeup Pouch", "A tidy home for your daily favorites", 19, ""],
  ["tools", "Soft Landing Reusable Rounds", "A reusable set for your daily cleanse", 16, ""],
  ["tools", "The Skin Reset Brush", "A gentle silicone face-cleansing brush", 18, ""],
  ["tools", "Cloud Nine Shower Mitt", "A softer way to lather up", 11, ""],
  ["tools", "On-the-Go Mini Bottle Set", "Refillable minis for your next getaway", 15, ""]
].map(([category, name, description, price, badge], index) => ({
  id: index + 1,
  category,
  name,
  description,
  price,
  badge,
  image: `https://images.unsplash.com/${imageSets[category][index % imageSets[category].length]}?auto=format&fit=crop&w=740&q=80`
}));

const productGrid = document.querySelector("#productGrid");
const resultsCount = document.querySelector("#resultsCount");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const categoryTabs = [...document.querySelectorAll(".category-tab")];
const bagCount = document.querySelector("#bagCount");
const drawerCount = document.querySelector("#drawerCount");
const bagDrawer = document.querySelector("#bagDrawer");
const drawerBackdrop = document.querySelector("#drawerBackdrop");
const bagItems = document.querySelector("#bagItems");
const bagEmpty = document.querySelector("#bagEmpty");
const drawerFooter = document.querySelector("#drawerFooter");
const toast = document.querySelector("#toast");
let activeCategory = "all";
let cart = [];
let toastTimer;

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = catalog.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (sortSelect.value === "low") visible.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "high") visible.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "az") visible.sort((a, b) => a.name.localeCompare(b.name));

  productGrid.innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-visual">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <button class="favorite-button" type="button" data-favorite="${product.id}" aria-label="Add ${product.name} to favorites" aria-pressed="false">♡</button>
        <button class="add-button" type="button" data-add="${product.id}">Add to bag <span aria-hidden="true">+</span></button>
      </div>
      <div class="product-info">
        <span class="product-name">${product.name}</span><span class="product-price">$${product.price.toFixed(2)}</span>
        <span class="product-description">${product.description}</span>
      </div>
    </article>
  `).join("");
  resultsCount.textContent = `${visible.length} ${visible.length === 1 ? "good thing" : "good things"}`;
  emptyState.hidden = visible.length > 0;
  productGrid.hidden = visible.length === 0;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function addToBag(productId) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ ...catalog.find((item) => item.id === productId), quantity: 1 });
  renderBag();
  showToast(`${catalog.find((item) => item.id === productId).name} added to your bag`);
}

function changeQuantity(productId, delta) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity < 1) cart = cart.filter((entry) => entry.id !== productId);
  renderBag();
}

function renderBag() {
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  bagCount.textContent = quantity;
  drawerCount.textContent = `(${quantity})`;
  bagEmpty.hidden = cart.length > 0;
  drawerFooter.hidden = cart.length === 0;
  bagItems.innerHTML = cart.map((item) => `
    <article class="bag-item">
      <img src="${item.image}" alt="" loading="lazy">
      <div><h3>${item.name}</h3><p>${item.description}</p><div class="quantity-control"><button type="button" data-quantity="${item.id}" data-delta="-1" aria-label="Remove one ${item.name}">−</button><span>${item.quantity}</span><button type="button" data-quantity="${item.id}" data-delta="1" aria-label="Add one ${item.name}">+</button></div></div>
      <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
    </article>
  `).join("");
  document.querySelector("#bagSubtotal").textContent = `$${subtotal.toFixed(2)}`;
}

function setDrawerOpen(open) {
  bagDrawer.classList.toggle("is-open", open);
  bagDrawer.setAttribute("aria-hidden", String(!open));
  drawerBackdrop.hidden = !open;
  document.body.classList.toggle("drawer-open", open);
  if (open) document.querySelector("#closeBag").focus();
  else document.querySelector("#openBag").focus();
}

productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const favoriteButton = event.target.closest("[data-favorite]");
  if (addButton) addToBag(Number(addButton.dataset.add));
  if (favoriteButton) {
    const selected = favoriteButton.getAttribute("aria-pressed") !== "true";
    favoriteButton.setAttribute("aria-pressed", String(selected));
    favoriteButton.classList.toggle("is-favorite", selected);
    favoriteButton.textContent = selected ? "♥" : "♡";
    favoriteButton.setAttribute("aria-label", `${selected ? "Remove" : "Add"} ${catalog.find((item) => item.id === Number(favoriteButton.dataset.favorite)).name} ${selected ? "from" : "to"} favorites`);
  }
});

bagItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (button) changeQuantity(Number(button.dataset.quantity), Number(button.dataset.delta));
});

categoryTabs.forEach((tab) => tab.addEventListener("click", () => {
  activeCategory = tab.dataset.category;
  categoryTabs.forEach((button) => button.classList.toggle("active", button === tab));
  renderProducts();
}));
searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);
document.querySelector("#openBag").addEventListener("click", () => setDrawerOpen(true));
document.querySelector("#closeBag").addEventListener("click", () => setDrawerOpen(false));
drawerBackdrop.addEventListener("click", () => setDrawerOpen(false));
document.querySelector("#continueShopping").addEventListener("click", () => setDrawerOpen(false));
document.querySelector("#checkoutButton").addEventListener("click", () => showToast("Checkout is coming soon. Thanks for shopping Baticrom!"));
document.querySelector("#menuToggle").addEventListener("click", (event) => {
  const isOpen = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!isOpen));
  event.currentTarget.textContent = isOpen ? "Menu" : "Close";
  document.querySelector(".main-nav").classList.toggle("is-open", !isOpen);
});
document.querySelector(".main-nav").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    document.querySelector(".main-nav").classList.remove("is-open");
    document.querySelector("#menuToggle").setAttribute("aria-expanded", "false");
    document.querySelector("#menuToggle").textContent = "Menu";
  }
});
document.querySelector("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#newsletterMessage").textContent = "You're on the list. A little Baticrom goodness is headed your way.";
  event.currentTarget.reset();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && bagDrawer.classList.contains("is-open")) setDrawerOpen(false);
});

renderProducts();
renderBag();
