const translateFuncParam = 0x40_75_50_00_00_00_00_00;
const availableFromLangs = {
  ru: "Русский",
  en: "Английский",
  zh: "Китайский",
  fr: "Французский",
  it: "Итальянский",
  es: "Испанский",
  de: "Немецкий",
}; // available languages for translation (from)
const availableToLangs = {
  ru: "Русский",
  en: "Английский",
  zh: "Китайский",
  fr: "Французский",
  it: "Итальянский",
  es: "Испанский",
  de: "Немецкий",
}; // available languages for translation (to)
const siteTranslates = {
  youtube: "https://youtu.be/",
  twitch: "https://twitch.tv/",
  vimeo: "https://vimeo.com/",
  "9gag": "https://9gag.com/gag/",
  vk: "https://vk.com/video?z=",
  xvideos: "https://www.xvideos.com/",
  pornhub: "https://rt.pornhub.com/view_video.php?viewkey=",
  udemy: "https://www.udemy.com",
  twitter: "https://twitter.com/i/status/",
  facebook: "https://www.facebook.com/",
  rutube: "https://rutube.ru/video/",
  "bilibili.com": "https://www.bilibili.com/video/",
  "mail.ru": "https://my.mail.ru/",
};
const translations = {
  ru: {
    translateVideo: "Перевести видео",
    disableTranslate: "Выключить",
    translationSettings: "Настройки перевода",
    resetSettings: "Сбросить настройки",
    VOTAutoTranslate: "Переводить при открытии",
    VOTDontTranslateRu: "Не переводить с русского",
    VOTVolume: "Громкость видео",
    VOTVolumeTranslation: "Громкость перевода",
    VOTAutoSetVolume: "Уменьшать громкость видео до ",
    VOTShowVideoSlider: "Слайдер громкости видео",
    VOTSyncVolume: "Связать громкость перевода и видео",
    VOTAudioProxy: "Проксировать полученное аудио",
    VOTDisableRussian: "VOT: Вы отключили перевод русскоязычных видео",
    VOTLiveNotSupported:
      "VOT: Не поддерживается перевод трансляций в прямом эфире",
    VOTPremiere: "VOT: Дождитесь окончания премьеры перед переводом",
    VOTVideoIsTooLong: "VOT: Видео слишком длинное",
  },
  en: {
    translateVideo: "Translate video",
    disableTranslate: "Turn off",
    translationSettings: "Translation settings",
    resetSettings: "Reset settings",
    VOTAutoTranslate: "Translate on open",
    VOTDontTranslateRu: "Do not translate from Russian",
    VOTVolume: "Video volume",
    VOTVolumeTranslation: "Translation Volume",
    VOTAutoSetVolume: "Reduce video volume to ",
    VOTShowVideoSlider: "Video volume slider",
    VOTSyncVolume: "Link translation and video volume",
    VOTAudioProxy: "Proxy received audio",
    VOTDisableRussian:
      "VOT: You have disabled the translation of Russian videos",
    VOTLiveNotSupported: "VOT: Translation of live streams is not supported",
    VOTPremiere: "VOT: Wait for the premiere to end before translating",
    VOTVideoIsTooLong: "VOT: Video is too long",
  },
  zh: {
    translateVideo: "翻译视频",
    disableTranslate: "关掉",
    translationSettings: "翻译设置",
    resetSettings: "重置设置",
    VOTAutoTranslate: "打开时翻译",
    VOTDontTranslateRu: "不要从俄语翻译",
    VOTVolume: "视频量",
    VOTVolumeTranslation: "翻译量",
    VOTAutoSetVolume: "将视频音量降低到",
    VOTShowVideoSlider: "视频音量滑块",
    VOTSyncVolume: "链接翻译和视频音量",
    VOTAudioProxy: "代理接收的音频",
    VOTDisableRussian: "VOT：您已禁用俄语视频的翻译",
    VOTLiveNotSupported: "VOT：不支持直播流的翻译",
    VOTPremiere: "VOT：等待首映结束后再翻译",
    VOTVideoIsTooLong: "VOT：视频太长",
  },
  de: {
    translateVideo: "Video übersetzen",
    disableTranslate: "Ausschalten",
    translationSettings: "Übersetzungseinstellungen",
    resetSettings: "Einstellungen zurücksetzen",
    VOTAutoTranslate: "Beim Öffnen übersetzen",
    VOTDontTranslateRu: "Nicht aus dem Russischen übersetzen",
    VOTVolume: "Video Lautstärke",
    VOTVolumeTranslation: "Übersetzungsvolumen",
    VOTAutoSetVolume: "Video-Lautstärke auf reduzieren ",
    VOTShowVideoSlider: "Video-Lautstärkeregler",
    VOTSyncVolume: "Übersetzungs- und Videolautstärke verknüpfen",
    VOTAudioProxy: "Empfangenes Audio proxyen",
    VOTDisableRussian:
      "VOT: Sie haben die Übersetzung von russischen Videos deaktiviert",
    VOTLiveNotSupported:
      "VOT: Übersetzung von Live-Streams wird nicht unterstützt",
    VOTPremiere:
      "VOT: Warten Sie, bis die Premiere beendet ist, bevor Sie übersetzen",
    VOTVideoIsTooLong: "VOT: Video ist zu lang",
  },
  es: {
    translateVideo: "Traducir video",
    disableTranslate: "Apagar",
    translationSettings: "Ajustes de traducción",
    resetSettings: "Restablecer ajustes",
    VOTAutoTranslate: "Traducir al abrir",
    VOTDontTranslateRu: "No traducir del ruso",
    VOTVolume: "Volumen de vídeo",
    VOTVolumeTranslation: "Volumen de traducción",
    VOTAutoSetVolume: "Reducir el volumen del video al ",
    VOTShowVideoSlider: "Deslizador de volumen de video",
    VOTSyncVolume: "Vincular el volumen de traducción y video",
    VOTAudioProxy: "Proxificar el audio recibido",
    VOTDisableRussian: "VOT: Ha desactivado la traducción de videos en ruso",
    VOTLiveNotSupported:
      "VOT: No se admite la traducción de transmisiones en vivo",
    VOTPremiere: "VOT: Espere a que termine el estreno antes de traducir",
    VOTVideoIsTooLong: "VOT: El video es demasiado largo",
  },
  fr: {
    translateVideo: "Traduire la vidéo",
    disableTranslate: "Désactiver",
    translationSettings: "Paramètres de traduction",
    resetSettings: "Réinitialiser les paramètres",
    VOTAutoTranslate: "Traduire à l'ouverture",
    VOTDontTranslateRu: "Ne pas traduire du russe",
    VOTVolume: "Volume de la vidéo",
    VOTVolumeTranslation: "Volume de traduction",
    VOTAutoSetVolume: "Réduire le volume de la vidéo à ",
    VOTShowVideoSlider: "Curseur de volume vidéo",
    VOTSyncVolume: "Lier le volume de la traduction et de la vidéo",
    VOTAudioProxy: "Proxy audio reçu",
    VOTDisableRussian:
      "VOT : Vous avez désactivé la traduction des vidéos en russe",
    VOTLiveNotSupported:
      "VOT : La traduction des flux en direct n'est pas prise en charge",
    VOTPremiere: "VOT : Attendez la fin de la première avant de traduire",
    VOTVideoIsTooLong: "VOT : La vidéo est trop longue",
  },
  it: {
    translateVideo: "Traduci il video",
    disableTranslate: "Spegnere",
    translationSettings: "Impostazioni di traduzione",
    resetSettings: "Ripristina impostazioni",
    VOTAutoTranslate: "Traduci all'apertura",
    VOTDontTranslateRu: "Non tradurre dal russo",
    VOTVolume: "Volume video",
    VOTVolumeTranslation: "Volume di traduzione",
    VOTAutoSetVolume: "Riduci il volume del video al ",
    VOTShowVideoSlider: "Cursore del volume del video",
    VOTSyncVolume: "Collega il volume della traduzione e del video",
    VOTAudioProxy: "Proxy audio ricevuto",
    VOTDisableRussian:
      "VOT : Hai disabilitato la traduzione dei video in russo",
    VOTLiveNotSupported:
      "VOT : La traduzione dei flussi dal vivo non è supportata",
    VOTPremiere: "VOT : Aspetta che la prima finisca prima di tradurre",
    VOTVideoIsTooLong: "VOT : Il video è troppo lungo",
  },
};

export {
  translateFuncParam,
  availableFromLangs,
  availableToLangs,
  siteTranslates,
  translations,
};
