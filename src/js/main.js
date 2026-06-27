// Injectando el footer (footer) en tu página de contacto usando JavaScript
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. INYECTAR HEADER
    // ==========================================
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('/src/components/header.html')
            .then(response => {
                if (!response.ok) throw new Error('No se pudo cargar el header');
                return response.text();
            })
            .then(html => {
                headerPlaceholder.innerHTML = html;
            })
            .catch(error => console.error('Error inyectando el header:', error));
    }

    // ==========================================
    // 2. INYECTAR FOOTER
    // ==========================================
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('/src/components/footer.html')
            .then(response => {
                if (!response.ok) throw new Error('No se pudo cargar el footer');
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(error => console.error('Error inyectando el footer:', error));
    }

});