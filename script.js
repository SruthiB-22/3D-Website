AFRAME.registerComponent('artwork', {
    schema: {
        title: {type: 'string', default: ''},
        artist: {type: 'string', default: ''}
    },
    init: function() {
        var data = this.data;
        var el = this.el;
        
        el.addEventListener('mouseenter', function () {
            el.setAttribute('scale', {x: 1.1, y: 1.1, z: 1.1});
        });

        el.addEventListener('mouseleave', function () {
            el.setAttribute('scale', {x: 1, y: 1, z: 1});
        });

        el.addEventListener('click', function () {
            document.getElementById('artwork-title').textContent = data.title;
            document.getElementById('artwork-artist').textContent = data.artist;
            document.getElementById('info-panel').classList.remove('hidden');
        });
    }
});

// Hide info panel when clicking outside of artworks
document.addEventListener('click', function(event) {
    if (!event.target.closest('[artwork]')) {
        document.getElementById('info-panel').classList.add('hidden');
    }
});