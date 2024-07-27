function logMessage(message) {
    const logContainer = document.getElementById('log-container');
    logContainer.textContent += `${new Date().toLocaleTimeString()}: ${message}\n`;
    logContainer.scrollTop = logContainer.scrollHeight; // Auto-scroll to the latest message
}