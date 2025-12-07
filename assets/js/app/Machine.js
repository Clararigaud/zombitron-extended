import "/scripts/tone/build/Tone.js";

export default class Machine {
    constructor() {

        this.passband = new Tone.Filter(1000, "lowpass").toMaster();
        this.output = this.passband;

        this.meduse1 =  new Tone.Player ( "/assets/js/app/instruments/clap.wav" , ).chain(this.output);
        this.meduse2 =  new Tone.Player ( "/assets/js/app/instruments/konck.wav" , ).chain(this.output);
    
        this.sausage = new Tone.Player ( "/assets/js/app/instruments/kickoo.wav" , ).chain(this.output);
        this.sausage.loop = true;
        this.sausage.autostart = true;

        this.slug =  new Tone.MembraneSynth().chain(this.output);
        this.slugPitch = 440;

        this.potatoEffect = new Tone.FeedbackDelay("8n", 0.5).chain(this.output);
        this.potato =  new Tone.Synth().chain(this.potatoEffect);

        this.options = {
            bpm: {
                min: 20,
                max: 200,
                default: 100,
            }
        };
        Tone.context.resume();
    }
}