// Fabric products array (could be loaded from API or database)
const fabrics = [
    { id: 'D083', name: 'Silk Brocade', color: 'Gold', price: 45 },
    { id: 'F102', name: 'Cotton Voile', color: 'White', price: 12 },
    { id: 'L205', name: 'Linen Blend', color: 'Olive', price: 20 },
    { id: 'T310', name: 'Tulle Netting', color: 'Pink', price: 8 }
  ];
  
  // DOM elements
  const productList = document.getElementById('product-list');
  const fabricSelect = document.getElementById('fabric-select');
  const saveBtn = document.getElementById('save-favorite');
  const favoriteList = document.getElementById('favorite-list');
  
  // Initialize the UI
  function init() {
    renderProducts();
    populateDropdown();
    loadFavorites();
  }
  
  // Render product list
  function renderProducts() {
    productList.innerHTML = fabrics.map(fabric => `
      <div class="fabric-card">
        <h3>${fabric.name}</h3>
        <p>Color: ${fabric.color}</p>
        <p>Price: $${fabric.price}</p>
      </div>
    `).join('');
  }
  
  // Populate the dropdown
  function populateDropdown() {
    fabrics.forEach(fabric => {
      const option = document.createElement('option');
      option.value = fabric.id;
      option.textContent = `${fabric.name} - ${fabric.color}`;
      fabricSelect.appendChild(option);
    });
  }
  
  // Save a selected fabric to favorites (with condition)
  function saveFavorite() {
    const selectedId = fabricSelect.value;
    const selectedFabric = fabrics.find(fab => fab.id === selectedId);
  
    // Conditional logic: don't allow duplicates
    let favorites = getFavorites();
    const alreadySaved = favorites.some(fab => fab.id === selectedId);
  
    if (alreadySaved) {
      alert(`${selectedFabric.name} is already in your favorites.`);
    } else {
      favorites.push(selectedFabric);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      updateFavoriteList(favorites);
      alert(`${selectedFabric.name} added to your favorites!`);
    }
  }
  
  // Get favorites from localStorage
  function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }
  
  // Load and display favorites
  function loadFavorites() {
    const favorites = getFavorites();
    updateFavoriteList(favorites);
  }
  
  // Update the favorite list in the DOM
  function updateFavoriteList(favorites) {
    favoriteList.innerHTML = favorites.map(fab => `
      <li>${fab.name} (${fab.color}) - $${fab.price}</li>
    `).join('');
  }
  
  // Event listener
  saveBtn.addEventListener('click', saveFavorite);
  
  // Initialize on page load
  init();
  