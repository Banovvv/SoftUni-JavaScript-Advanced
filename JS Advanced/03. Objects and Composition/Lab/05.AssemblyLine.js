function createAssemblyLine() {
    return {
        hasClima: function (object) {
            object.temp = 21;
            object.tempSettings = 21;
            object.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            };
        },
        hasAudio: function (object) {
            object.currentTrack = {
                name: null,
                artist: null,
            };
            object.nowPlaying = function () {
                if (this.currentTrack.name !== null && this.currentTrack.artist !== null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            };
        },
        hasParktronic: function (object) {
            object.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0, 25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    };
}

const assemblyLine = createAssemblyLine();

const car = {
    make: 'Audi',
    model: 'A4'
};

assemblyLine.hasClima(car);
console.log(car.temp);
car.tempSettings = 18;
car.adjustTemp();
console.log(car.temp);

assemblyLine.hasAudio(car);
car.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
car.nowPlaying();

assemblyLine.hasParktronic(car);
car.checkDistance(0.4);
car.checkDistance(0.2);
