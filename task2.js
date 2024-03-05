angular.module('imageGalleryApp', [])
    .controller('ImageGalleryController', function() {
        var vm = this;

        vm.images = [
            {
                title: 'Beautiful Sunset',
                url: 'https://assets.hongkiat.com/uploads/ww-sunset-wallpapers/preview/sunset-desktop-wallpaper-1.jpg',
                description: 'A breathtaking view of the sunset over the mountains.'
            },
            {
                title: 'City Lights',
                url: 'https://w0.peakpx.com/wallpaper/888/856/HD-wallpaper-beautiful-city-colorful-colour-landscape-light-night-water.jpg',
                description: 'The vibrant lights of a cityscape during the night.'
            },
            {
                title: 'green garden',
                url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
                description: 'The green garden is apassion of soul peace in real life.'
            },
        ];

        vm.selectedImage = null;

        vm.showDetails = function(image) {
            vm.selectedImage = image;
        };

        vm.closeDetails = function() {
            vm.selectedImage = null;
        };
    });