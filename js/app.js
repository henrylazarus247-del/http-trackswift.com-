// Main application logic

function searchTracking() {
    const input = document.getElementById('trackingInput');
    const trackingNumber = input.value.trim().toUpperCase();

    if (trackingNumber === '') {
        alert('Please enter a tracking number');
        return;
    }

    trackPackage(trackingNumber);
}

function trackPackage(trackingNumber) {
    const data = getTrackingData(trackingNumber);

    if (!data) {
        alert('Tracking number not found: ' + trackingNumber);
        return;
    }

    displayTracking(data);
    document.getElementById('trackingInput').value = trackingNumber;
}

function displayTracking(data) {
    const resultsSection = document.getElementById('results');
    const trackingNumberSpan = document.getElementById('trackingNumber');
    const statusSpan = document.getElementById('status');
    const timelineContainer = document.getElementById('timelineContainer');

    // Update tracking number and status
    trackingNumberSpan.textContent = data.trackingNumber;
    statusSpan.textContent = data.status;
    statusSpan.className = 'status-badge ' + getStatusClass(data.status);

    // Clear existing timeline
    timelineContainer.innerHTML = '';

    // Build timeline
    data.timeline.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        if (item.completed) {
            timelineItem.classList.add('completed');
        } else {
            timelineItem.classList.add('pending');
        }

        if (item.active) {
            timelineItem.classList.add('active');
        }

        if (index === data.timeline.length - 1) {
            timelineItem.classList.add('last');
        }

        const marker = document.createElement('div');
        marker.className = 'timeline-marker';
        marker.textContent = item.completed ? '✓' : '○';

        const content = document.createElement('div');
        content.className = 'timeline-content';
        content.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.date} ${item.date !== 'TBD' ? 'at ' + item.time : ''}</p>
        `;

        timelineItem.appendChild(marker);
        timelineItem.appendChild(content);
        timelineContainer.appendChild(timelineItem);
    });

    // Show results section
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Handle Enter key in search box
document.addEventListener('DOMContentLoaded', function () {
    const trackingInput = document.getElementById('trackingInput');
    if (trackingInput) {
        trackingInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchTracking();
            }
        });
    }
});
