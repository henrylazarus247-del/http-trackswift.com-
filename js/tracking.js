// Sample tracking data
const trackingDatabase = {
    'TRK001': {
        trackingNumber: 'TRK001',
        status: 'In Transit',
        currentStep: 2,
        timeline: [
            { step: 1, title: 'Package Received', date: '2026-07-05', time: '10:30 AM', completed: true },
            { step: 2, title: 'Processing', date: '2026-07-06', time: '02:15 PM', completed: true },
            { step: 3, title: 'In Transit', date: '2026-07-07', time: '08:45 AM', completed: true, active: true },
            { step: 4, title: 'Out for Delivery', date: '2026-07-08', time: 'TBD', completed: false },
            { step: 5, title: 'Delivered', date: 'TBD', time: 'TBD', completed: false }
        ]
    },
    'TRK002': {
        trackingNumber: 'TRK002',
        status: 'Processing',
        currentStep: 1,
        timeline: [
            { step: 1, title: 'Package Received', date: '2026-07-08', time: '09:00 AM', completed: true, active: true },
            { step: 2, title: 'Processing', date: 'TBD', time: 'TBD', completed: false },
            { step: 3, title: 'In Transit', date: 'TBD', time: 'TBD', completed: false },
            { step: 4, title: 'Out for Delivery', date: 'TBD', time: 'TBD', completed: false },
            { step: 5, title: 'Delivered', date: 'TBD', time: 'TBD', completed: false }
        ]
    },
    'TRK003': {
        trackingNumber: 'TRK003',
        status: 'Delivered',
        currentStep: 5,
        timeline: [
            { step: 1, title: 'Package Received', date: '2026-07-01', time: '11:00 AM', completed: true },
            { step: 2, title: 'Processing', date: '2026-07-02', time: '03:30 PM', completed: true },
            { step: 3, title: 'In Transit', date: '2026-07-03', time: '07:00 AM', completed: true },
            { step: 4, title: 'Out for Delivery', date: '2026-07-04', time: '06:00 AM', completed: true },
            { step: 5, title: 'Delivered', date: '2026-07-04', time: '02:45 PM', completed: true, active: true }
        ]
    }
};

function getTrackingData(trackingNumber) {
    return trackingDatabase[trackingNumber] || null;
}

function getStatusClass(status) {
    switch (status.toLowerCase()) {
        case 'delivered':
            return 'delivered';
        case 'in transit':
        case 'out for delivery':
            return 'in-transit';
        default:
            return 'pending';
    }
}
