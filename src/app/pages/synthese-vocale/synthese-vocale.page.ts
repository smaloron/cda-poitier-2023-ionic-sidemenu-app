import { Component, OnInit } from '@angular/core';
import { TextToSpeech, SpeechSynthesisVoice } from '@capacitor-community/text-to-speech';

@Component({
  selector: 'app-synthese-vocale',
  templateUrl: './synthese-vocale.page.html',
  styleUrls: ['./synthese-vocale.page.scss'],
})
export class SyntheseVocalePage implements OnInit {

  text = 'Il était une fois dans un pays fort lointain une princesse et un crapeau';

  voiceList: SpeechSynthesisVoice[] = [];

  voiceIndex = 0;

  chosenVoice: string | null = null;

  constructor() { }

  ngOnInit() {
    this.getInfos();
  }

  speak() {

    if (this.chosenVoice !== null) {
      this.voiceIndex = this.voiceList.findIndex((item) => {
        console.log(item.voiceURI, this.chosenVoice)
        return item.voiceURI == this.chosenVoice;
      });
    }

    console.log(this.voiceIndex);
    console.log(this.chosenVoice);

    TextToSpeech.speak({
      text: this.text,
      lang: 'fr-BE',
      pitch: 1.3,
      rate: 0.9,
      voice: this.voiceIndex
    });
  }

  async getInfos() {
    const data = await TextToSpeech.getSupportedVoices();
    this.voiceList = data.voices;
  }

  onChangeVoice(pos: number) {
    this.voiceIndex = pos
    console.log(pos);
  }

}
