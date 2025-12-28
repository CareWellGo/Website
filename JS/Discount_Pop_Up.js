window.onload = function() {
    setTimeout(() => {
        const alertBox = document.getElementById('purchaseAlert');
        
        alertBox.style.display = 'block';
    }, 5000); 
};

function closeAlert() {
    const alert = document.getElementById('purchaseAlert');
    alert.style.transition = "0.5s ease";
    alert.style.transform = "translateX(120%)"; 
    setTimeout(() => alert.remove(), 500);
}

function handlePurchase() {
    alert("Redirecting to Secure Payment Portal...");
}