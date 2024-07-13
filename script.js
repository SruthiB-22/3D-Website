AFRAME.registerComponent('planet-info', {
    schema: {
        name: {type: 'string', default: ''},
        radius: {type: 'number', default: 0},
        distance: {type: 'number', default: 0}
    },
    init: function() {
        var data = this.data;
        var el = this.el;
        
        el.addEventListener('click', function () {
            document.getElementById('planet-name').textContent = data.name;
            document.getElementById('planet-radius').textContent = data.radius;
            document.getElementById('planet-distance').textContent = data.distance;
            document.getElementById('info-panel').classList.remove('hidden');
        });
    }
});

AFRAME.registerComponent('orbit', {
    schema: {
        radius: {type: 'number', default: 5},
        speed: {type: 'number', default: 1}
    },
    tick: function(time, timeDelta) {
        var el = this.el;
        var data = this.data;
        var angle = time * 0.001 * data.speed;
        var x = data.radius * Math.cos(angle);
        var z = data.radius * Math.sin(angle);
        el.setAttribute('position', {x: x, y: 0, z: z});
    }
});

// Hide info panel when clicking outside of planets
document.addEventListener('click', function(event) {
    if (!event.target.closest('.planet')) {
        document.getElementById('info-panel').classList.add('hidden');
    }
});