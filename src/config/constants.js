const translateFuncParam = 0x40_75_50_00_00_00_00_00;
const availableLangs = {
  ru: "Russian",
  en: "English",
  zh: "Chinese",
  ko: "Korean",
  ar: "Arabic",
  fr: "French",
  it: "Italian",
  es: "Spanish",
  de: "German",
  ja: "Japanese",
}; // available languages for translation
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
  coub: "https://coub.com/view/",
};
const translations = {
  ru: {
    recommended: "рекомендуется",
    translateVideo: "Перевести видео",
    disableTranslate: "Выключить",
    translationSettings: "Настройки перевода",
    resetSettings: "Сбросить настройки",
    videoBeingTranslated: "Видео переводится",
    videoLanguage: "Язык видео",
    translationLanguage: "Язык перевода",
    translationTake: "Перевод займёт",
    translationTakeMoreThanHour: "Перевод займёт больше часа",
    translationTakeAboutMinute: "Перевод займёт около минуты",
    translationTakeFewMinutes: "Перевод займёт несколько минут",
    translationTakeApproximatelyMinutes: "Перевод займёт примерно {0} минут",
    translationTakeApproximatelyMinute: "Перевод займёт примерно {0} минуты",
    unSupportedExtensionError: `Ошибка! ${GM_info.scriptHandler} не поддерживается этой версией расширения!\n\nПожалуйста, используйте cloudflare-версию расширения VOT.`,
    requestTranslationFailed: "Не удалось запросить перевод видео",
    audioNotReceived: "Не получена ссылка на аудио",
    grantPermissionToAutoPlay: "Предоставьте разрешение на автовоспроизведение",
    neededAdditionalExtension:
      "Для поддержки этого сайта необходимо дополнительное расширение",
    audioFormatNotSupported: "Формат аудио не поддерживается",
    VOTAutoTranslate: "Переводить при открытии",
    VOTDontTranslateYourLang: "Не переводить с родного языка",
    VOTVolume: "Громкость видео",
    VOTVolumeTranslation: "Громкость перевода",
    VOTAutoSetVolume: "Уменьшать громкость видео до ",
    VOTShowVideoSlider: "Слайдер громкости видео",
    VOTSyncVolume: "Связать громкость перевода и видео",
    VOTAudioProxy: "Проксировать полученное аудио",
    VOTDisableFromYourLang: "VOT: Вы отключили перевод видео на вашем языке",
    VOTLiveNotSupported:
      "VOT: Не поддерживается перевод трансляций в прямом эфире",
    VOTPremiere: "VOT: Дождитесь окончания премьеры перед переводом",
    VOTVideoIsTooLong: "VOT: Видео слишком длинное",
    VOTNoVideoIDFound: "VOT: Не найдено ID видео",
    VOTFailedInitDB: "VOT: Не удалось инициализовать базу данных",
    VOTDBNeedUpdate:
      "VOT: Базе данных нужно обновление, пожалуйста, перезагрузите страницу",
    VOTDisabledForDBUpdating: `VOT отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с ${window.location.hostname} и попробуйте снова`,
    VOTFailedWriteToDB: "VOT: Не удалось записать данные в базу данных",
    VOTFailedReadFromDB: "VOT: Не удалось получить данные из базы данных",
    Russian: "Русский",
    English: "Английский",
    Chinese: "Китайский",
    French: "Французский",
    Italian: "Итальянский",
    Spanish: "Испанский",
    German: "Немецкий",
    Korean: "Корейский",
    Japanese: "Японский",
    Arabic: "Арабский",
  },
  en: {
    recommended: "recommended",
    translateVideo: "Translate video",
    disableTranslate: "Turn off",
    translationSettings: "Translation settings",
    resetSettings: "Reset settings",
    videoBeingTranslated: "The video is being translated",
    videoLanguage: "Video language",
    translationLanguage: "Translation language",
    translationTake: "The translation will take",
    translationTakeMoreThanHour: "The translation will take more than an hour",
    translationTakeAboutMinute: "The translation will take about a minute",
    translationTakeFewMinutes: "The translation will take a few minutes",
    translationTakeApproximatelyMinutes:
      "The translation will take approximately {0} minutes",
    translationTakeApproximatelyMinute:
      "The translation will take approximately {0} minutes",
    unSupportedExtensionError: `Error! ${GM_info.scriptHandler} is not supported by this version of the extension!\n\nPlease use the cloudflare version of the VOT extension.`,
    requestTranslationFailed: "Failed to request video translation",
    audioNotReceived: "Audio link not received",
    grantPermissionToAutoPlay: "Grant permission to autoplay",
    neededAdditionalExtension:
      "An additional extension is needed to support this site",
    audioFormatNotSupported: "The audio format is not supported",
    VOTAutoTranslate: "Translate on open",
    VOTDontTranslateYourLang: "Do not translate from my language",
    VOTVolume: "Video volume",
    VOTVolumeTranslation: "Translation Volume",
    VOTAutoSetVolume: "Reduce video volume to ",
    VOTShowVideoSlider: "Video volume slider",
    VOTSyncVolume: "Link translation and video volume",
    VOTAudioProxy: "Proxy received audio",
    VOTDisableFromYourLang:
      "VOT: You have disabled the translation of the video in your language",
    VOTLiveNotSupported: "VOT: Translation of live streams is not supported",
    VOTPremiere: "VOT: Wait for the premiere to end before translating",
    VOTVideoIsTooLong: "VOT: Video is too long",
    VOTNoVideoIDFound: "VOT: No video ID found",
    VOTFailedInitDB: "VOT: Failed to initialize database",
    VOTDBNeedUpdate:
      "VOT: The database needs an update, please reload the page",
    VOTDisabledForDBUpdating: `VOT is disabled due to an error when updating the Database. Close all open tabs with ${window.location.hostname} and try again`,
    VOTFailedWriteToDB: "VOT: Data could not be written to the database",
    VOTFailedReadFromDB: "VOT: Data could not be retrieved from the database",
    Russian: "Russian",
    English: "English",
    Chinese: "Chinese",
    French: "French",
    Italian: "Italian",
    Spanish: "Spanish",
    German: "German",
    Korean: "Korean",
    Japanese: "Japanese",
    Arabic: "Arabic",
  },
  zh: {
    recommended: "推荐使用",
    translateVideo: "翻译视频",
    disableTranslate: "关掉",
    translationSettings: "翻译需要一个多小时",
    resetSettings: "重置设置",
    videoBeingTranslated: "视频正在翻译中",
    videoLanguage: "视频语言",
    translationLanguage: "翻译语言",
    translationTake: "翻译将采取",
    translationTakeMoreThanHour: "翻译将采取一个多小时",
    translationTakeAboutMinute: "翻译将采取一分钟",
    translationTakeFewMinutes: "翻译将采取几分钟",
    translationTakeApproximatelyMinutes: "翻译将采取大约需要{0}分钟",
    translationTakeApproximatelyMinute: "翻译将采取大约需要{0}分钟",
    unSupportedExtensionError: `错误! 此版本的扩展不支持 ${GM_info.scriptHandler}!\n\n请使用cloudflare版本的VOT扩展.`,
    requestTranslationFailed: "请求视频翻译失败",
    audioNotReceived: "未收到音频链接",
    grantPermissionToAutoPlay: "授予自动播放权限",
    neededAdditionalExtension: "需要一个额外的扩展来支持这个网站",
    audioFormatNotSupported: "不支持音频格式",
    VOTAutoTranslate: "打开时翻译",
    VOTDontTranslateYourLang: "不要从你的语言翻译过来",
    VOTVolume: "视频量",
    VOTVolumeTranslation: "翻译量",
    VOTAutoSetVolume: "将视频音量降低到",
    VOTShowVideoSlider: "视频音量滑块",
    VOTSyncVolume: "链接翻译和视频音量",
    VOTAudioProxy: "代理接收的音频",
    VOTDisableFromYourLang: "VOT：你已经禁用了你的语言的视频翻译",
    VOTLiveNotSupported: "VOT：不支持直播流的翻译",
    VOTPremiere: "VOT：等待首映结束后再翻译",
    VOTVideoIsTooLong: "VOT：视频太长",
    VOTNoVideoIDFound: "VOT: 没有找到视频ID",
    VOTFailedInitDB: "VOT: 初始化数据库失败",
    VOTDBNeedUpdate: "VOT: 数据库需要更新,请重新加载页面",
    VOTDisabledForDBUpdating: `VOT由于更新数据库时出错而被禁用。 关闭所有打开的选项卡${window.location.hostname} 再试一次`,
    VOTFailedWriteToDB: "VOT: 无法将数据写入数据库",
    VOTFailedReadFromDB: "VOT: 无法从数据库中检索数据",
    Russian: "俄语",
    English: "英语",
    Chinese: "中文",
    French: "法语",
    Italian: "意大利语",
    Spanish: "西班牙语",
    German: "德语",
    Korean: "韩语",
    Japanese: "日语",
    Arabic: "阿拉伯语",
  },
  ar: {
    recommended: "موصى به",
    translateVideo: "ترجمة الفيديو",
    disableTranslate: "إيقاف التشغيل",
    translationSettings: "إعدادات الترجمة",
    resetSettings: "إعادة تعيين الإعدادات",
    videoBeingTranslated: "يتم ترجمة الفيديو",
    videoLanguage: "لغة الفيديو",
    translationLanguage: "لغة الترجمة",
    translationTake: "ستستغرق الترجمة",
    translationTakeMoreThanHour: "ستستغرق الترجمة أكثر من ساعة",
    translationTakeAboutMinute: "ستستغرق الترجمة حوالي دقيقة",
    translationTakeFewMinutes: "ستستغرق الترجمة بضع دقائق",
    translationTakeApproximatelyMinutes:
      "ستستغرق الترجمة تقريبا {0} دقائق",
    translationTakeApproximatelyMinute:
      "ستستغرق الترجمة تقريبا {0} دقيقة",
    unSupportedExtensionError: `خطأ! ${GM_info.scriptHandler} غير مدعوم من قبل هذه النسخة من الامتداد!\n\nيرجى استخدام نسخة cloudflare من امتداد VOT.`,
    requestTranslationFailed: "فشل طلب ترجمة الفيديو",
    audioNotReceived: "لم يتم استلام رابط الصوت",
    grantPermissionToAutoPlay: "السماح بالتشغيل التلقائي",
    neededAdditionalExtension:
      "هناك حاجة إلى امتداد إضافي لدعم هذا الموقع",
    audioFormatNotSupported: "تنسيق الصوت غير مدعوم",
    VOTAutoTranslate: "الترجمة عند الفتح",
    VOTDontTranslateYourLang: "لا تترجم من لغتي",
    VOTVolume: "حجم الفيديو",
    VOTVolumeTranslation: "حجم الترجمة",
    VOTAutoSetVolume: "خفض حجم الفيديو إلى ",
    VOTShowVideoSlider: "شريط تحكم حجم الفيديو",
    VOTSyncVolume: "اربط حجم الترجمة والفيديو",
    VOTAudioProxy: "الصوت المستلم عبر وكيل",
    VOTDisableFromYourLang:
      "VOT: لقد قمت بتعطيل ترجمة الفيديو بلغتك",
    VOTLiveNotSupported: "VOT: لا يتم دعم ترجمة البث المباشر",
    VOTPremiere: "VOT: انتظر حتى ينتهي العرض الأول قبل الترجمة",
    VOTVideoIsTooLong: "VOT: الفيديو طويل جداً",
    VOTNoVideoIDFound: "VOT: لم يتم العثور على معرف الفيديو",
    VOTFailedInitDB: "VOT: فشل في تهيئة قاعدة البيانات",
    VOTDBNeedUpdate:
      "VOT: تحتاج قاعدة البيانات إلى تحديث، يرجى إعادة تحميل الصفحة",
    VOTDisabledForDBUpdating: `VOT معطل بسبب خطأ عند تحديث قاعدة البيانات. أغلق جميع علامات التبويب المفتوحة مع ${window.location.hostname} وحاول مرة أخرى`,
    VOTFailedWriteToDB: "VOT: لم يتمكن من كتابة البيانات إلى قاعدة البيانات",
    VOTFailedReadFromDB: "VOT: لم يتمكن من استرداد البيانات من قاعدة البيانات",
    Russian: "الروسية",
    English: "الإنجليزية",
    Chinese: "الصينية",
    French: "الفرنسية",
    Italian: "الإيطالية",
    Spanish: "الإسبانية",
    German: "الألمانية",
    Korean: "الكورية",
    Japanese: "اليابانية",
    Arabic: "العربية",
  },
  ko: {
    recommended: "추천",
    translateVideo: "비디오 번역",
    disableTranslate: "끄기",
    translationSettings: "번역 설정",
    resetSettings: "설정 초기화",
    videoBeingTranslated: "비디오가 번역되고 있습니다",
    videoLanguage: "비디오 언어",
    translationLanguage: "번역 언어",
    translationTake: "번역에 걸리는 시간",
    translationTakeMoreThanHour: "번역에 1시간 이상 걸립니다",
    translationTakeAboutMinute: "번역에 약 1분 걸립니다",
    translationTakeFewMinutes: "번역에 몇 분 걸립니다",
    translationTakeApproximatelyMinutes:
      "번역에 약 {0}분 걸립니다",
    translationTakeApproximatelyMinute:
      "번역에 약 {0}분 걸립니다",
    unSupportedExtensionError: `오류! ${GM_info.scriptHandler}는 이 버전의 확장 프로그램에서 지원되지 않습니다!\n\nVOT 확장 프로그램의 클라우드플레어 버전을 사용하십시오.`,
    requestTranslationFailed: "비디오 번역 요청 실패",
    audioNotReceived: "오디오 링크를 받지 못했습니다",
    grantPermissionToAutoPlay: "자동 재생 권한 부여",
    neededAdditionalExtension:
      "이 사이트를 지원하기 위해 추가 확장 프로그램이 필요합니다",
    audioFormatNotSupported: "오디오 형식이 지원되지 않습니다",
    VOTAutoTranslate: "열 때 번역하기",
    VOTDontTranslateYourLang: "내 언어에서 번역하지 않기",
    VOTVolume: "비디오 볼륨",
    VOTVolumeTranslation: "번역 볼륨",
    VOTAutoSetVolume: "비디오 볼륨을 줄입니다 ",
    VOTShowVideoSlider: "비디오 볼륨 슬라이더",
    VOTSyncVolume: "번역과 비디오 볼륨 연동하기",
    VOTAudioProxy: "프록시로 오디오 받기",
    VOTDisableFromYourLang:
      "VOT: 내 언어로 된 비디오의 번역을 비활성화했습니다",
    VOTLiveNotSupported: "VOT: 라이브 스트림의 번역은 지원되지 않습니다",
    VOTPremiere: "VOT: 번역하기 전에 프리미어가 끝날 때까지 기다리십시오",
    VOTVideoIsTooLong: "VOT: 비디오가 너무 깁니다",
    VOTNoVideoIDFound: "VOT: 비디오 ID를 찾을 수 없습니다",
    VOTFailedInitDB: "VOT: 데이터베이스 초기화 실패",
    VOTDBNeedUpdate:
      "VOT: 데이터베이스가 업데이트가 필요합니다. 페이지를 새로고침하십시오",
    VOTDisabledForDBUpdating: `데이터베이스 업데이트 오류로 인해 VOT가 비활성화되었습니다. ${window.location.hostname}와 열려 있는 모든 탭을 닫고 다시 시도하십시오`,
    VOTFailedWriteToDB: "VOT: 데이터베이스에 데이터를 쓸 수 없습니다",
    VOTFailedReadFromDB: "VOT: 데이터베이스에서 데이터를 읽을 수 없습니다",
    Russian: "러시아어",
    English: "영어",
    Chinese: "중국어",
    French: "프랑스어",
    Italian: "이탈리아어",
    Spanish: "스페인어",
    German: "독일어",
    Korean: "한국어",
    Japanese: "일본어",
    Arabic: "아랍어",
  },
  de: {
    recommended: "es wird empfohlen",
    translateVideo: "Video übersetzen",
    disableTranslate: "Ausschalten",
    translationSettings: "Übersetzungseinstellungen",
    resetSettings: "Einstellungen zurücksetzen",
    videoBeingTranslated: "Das Video wird übersetzt",
    videoLanguage: "Sprache Video",
    translationLanguage: "Zielsprache",
    translationTake: "Die Übersetzung dauert",
    translationTakeMoreThanHour: "Die Übersetzung dauert mehr als eine Stunde",
    translationTakeAboutMinute: "Die Übersetzung dauert ungefähr eine Minute",
    translationTakeFewMinutes: "Die Übersetzung dauert einige Minuten",
    translationTakeApproximatelyMinutes:
      "Die Übersetzung dauert ungefähr {0} Minuten",
    translationTakeApproximatelyMinute:
      "Die Übersetzung dauert ungefähr {0} Minuten",
    unSupportedExtensionError: `Fehler! ${GM_info.scriptHandler} wird von dieser Version der Erweiterung nicht unterstützt!\n\nBitte verwenden Sie die Cloudflare-Version der VOT-Erweiterung.`,
    requestTranslationFailed:
      "Videoübersetzung konnte nicht angefordert werden",
    audioNotReceived: "Audiolink nicht empfangen",
    grantPermissionToAutoPlay:
      "Erteilen Sie die Berechtigung zur automatischen Wiedergabe",
    neededAdditionalExtension:
      "Eine zusätzliche Erweiterung ist erforderlich, um diese Website zu unterstützen",
    audioFormatNotSupported: "Das Audioformat wird nicht unterstützt",
    VOTAutoTranslate: "Beim Öffnen übersetzen",
    VOTDontTranslateYourLang: "Nicht aus Ihrer Sprache übersetzen",
    VOTVolume: "Video Lautstärke",
    VOTVolumeTranslation: "Übersetzungsvolumen",
    VOTAutoSetVolume: "Video-Lautstärke auf reduzieren ",
    VOTShowVideoSlider: "Video-Lautstärkeregler",
    VOTSyncVolume: "Übersetzungs- und Videolautstärke verknüpfen",
    VOTAudioProxy: "Empfangenes Audio proxyen",
    VOTDisableFromYourLang:
      "VOT: Sie haben die Übersetzung des Videos in Ihrer Sprache deaktiviert",
    VOTLiveNotSupported:
      "VOT: Übersetzung von Live-Streams wird nicht unterstützt",
    VOTPremiere:
      "VOT: Warten Sie, bis die Premiere beendet ist, bevor Sie übersetzen",
    VOTVideoIsTooLong: "VOT: Video ist zu lang",
    VOTNoVideoIDFound: "VOT: Keine Video-ID gefunden",
    VOTFailedInitDB: "VOT: Datenbank konnte nicht initialisiert werden",
    VOTDBNeedUpdate:
      "VOT: Die Datenbank muss aktualisiert werden, bitte laden Sie die Seite neu",
    VOTDisabledForDBUpdating: `VOT wurde aufgrund eines Fehlers beim Aktualisieren der Datenbank deaktiviert. Schließen Sie alle geöffneten Tabs mit ${window.location.hostname} und versuchen Sie es erneut`,
    VOTFailedWriteToDB:
      "VOT: Daten konnten nicht in die Datenbank geschrieben werden",
    VOTFailedReadFromDB: "VOT: Konnte keine Daten aus der Datenbank abrufen",
    Russian: "Russisch",
    English: "Englisch",
    Chinese: "Chinesisch",
    French: "Französisch",
    Italian: "Italienisch",
    Spanish: "Spanisch",
    German: "Deutsch",
    Korean: "Koreanisch",
    Japanese: "Japanisch",
    Arabic: "Arabisch",
  },
  es: {
    recommended: "es recomendable",
    translateVideo: "Traducir video",
    disableTranslate: "Apagar",
    translationSettings: "Ajustes de traducción",
    resetSettings: "Restablecer ajustes",
    videoBeingTranslated: "El video está siendo traducido",
    videoLanguage: "Idioma del video",
    translationLanguage: "Idioma de la traducción",
    translationTake: "La traducción tardará",
    translationTakeMoreThanHour: "La traducción tardará más de una hora",
    translationTakeAboutMinute:
      "La traducción tardará aproximadamente un minuto",
    translationTakeFewMinutes: "La traducción tardará unos minutos",
    translationTakeApproximatelyMinutes:
      "La traducción tardará aproximadamente {0} minutos",
    translationTakeApproximatelyMinute:
      "La traducción tardará aproximadamente {0} minutos",
    unSupportedExtensionError: `Error! ${GM_info.scriptHandler} no es compatible con esta versión de la extensión!\n\nUtilice la versión cloudflare de la extensión VOT.`,
    requestTranslationFailed: "Error al solicitar la traducción de vídeo",
    audioNotReceived: "Audiolink nicht empfangen",
    grantPermissionToAutoPlay: "Conceder permiso de reproducción automática",
    neededAdditionalExtension:
      "Se necesita una extensión adicional para admitir este sitio",
    audioFormatNotSupported: "El formato de audio no es compatible",
    VOTAutoTranslate: "Traducir al abrir",
    VOTDontTranslateYourLang: "No traduzca de su lengua",
    VOTVolume: "Volumen de vídeo",
    VOTVolumeTranslation: "Volumen de traducción",
    VOTAutoSetVolume: "Reducir el volumen del video al ",
    VOTShowVideoSlider: "Deslizador de volumen de video",
    VOTSyncVolume: "Vincular el volumen de traducción y video",
    VOTAudioProxy: "Proxificar el audio recibido",
    VOTDisableFromYourLang:
      "VOT: Ha desactivado la traducción del vídeo en su idioma",
    VOTLiveNotSupported:
      "VOT: No se admite la traducción de transmisiones en vivo",
    VOTPremiere: "VOT: Espere a que termine el estreno antes de traducir",
    VOTVideoIsTooLong: "VOT: El video es demasiado largo",
    VOTNoVideoIDFound: "VOT: No se encontró id de video",
    VOTFailedInitDB: "VOT: No se pudo inicializar la base de datos",
    VOTDBNeedUpdate:
      "VOT: la Base de datos necesita una actualización, por favor vuelva a cargar la página",
    VOTDisabledForDBUpdating: `VOT está deshabilitado debido a un error al actualizar la Base de Datos. Cierre todas las pestañas abiertas con ${window.location.hostname} y vuelve a intentarlo`,
    VOTFailedWriteToDB: "VOT: No se pudo escribir datos en la base de datos",
    VOTFailedReadFromDB: "VOT: No se pudo recuperar datos de la base de datos",
    Russian: "Ruso",
    English: "Inglés",
    Chinese: "Chino",
    French: "Francés",
    Italian: "Italiano",
    Spanish: "Español",
    German: "Alemán",
    Korean: "Coreano",
    Japanese: "Japonés",
    Arabic: "Árabe",
  },
  fr: {
    recommended: "recommande",
    translateVideo: "Traduire la vidéo",
    disableTranslate: "Désactiver",
    translationSettings: "Paramètres de traduction",
    resetSettings: "Réinitialiser les paramètres",
    videoBeingTranslated: "La vidéo est en cours de traduction",
    videoLanguage: "Langue vidéo",
    translationLanguage: "Langue cible",
    translationTake: "La traduction prendra",
    translationTakeMoreThanHour: "La traduction prendra plus d'une heure",
    translationTakeAboutMinute: "La traduction prendra environ une minute",
    translationTakeFewMinutes: "La traduction prendra quelques minutes",
    translationTakeApproximatelyMinutes:
      "La traduction prendra environ {0} minutes",
    translationTakeApproximatelyMinute:
      "La traduction prendra environ {0} minutes",
    unSupportedExtensionError: `Erreur! ${GM_info.scriptHandler} n'est pas supporté par cette version de l'extension!!\n\nVeuillez utiliser la version cloudflare de l'extension VOT.`,
    requestTranslationFailed:
      "Impossible de demander la traduction de la vidéo",
    audioNotReceived: "Lien audio non reçu",
    grantPermissionToAutoPlay: "Accorder l'autorisation de lecture automatique",
    neededAdditionalExtension:
      "Une extension supplémentaire est nécessaire pour prendre en charge ce site",
    audioFormatNotSupported: "Format audio non pris en charge",
    VOTAutoTranslate: "Traduire à l'ouverture",
    VOTDontTranslateYourLang: "Ne pas traduire à partir de votre langue",
    VOTVolume: "Volume de la vidéo",
    VOTVolumeTranslation: "Volume de traduction",
    VOTAutoSetVolume: "Réduire le volume de la vidéo à ",
    VOTShowVideoSlider: "Curseur de volume vidéo",
    VOTSyncVolume: "Lier le volume de la traduction et de la vidéo",
    VOTAudioProxy: "Proxy audio reçu",
    VOTDisableFromYourLang:
      "VOT: Vous avez désactivé la traduction de la vidéo dans votre langue",
    VOTLiveNotSupported:
      "VOT: La traduction des flux en direct n'est pas prise en charge",
    VOTPremiere: "VOT: Attendez la fin de la première avant de traduire",
    VOTVideoIsTooLong: "VOT: La vidéo est trop longue",
    VOTNoVideoIDFound: "VOT: ID vidéo introuvable",
    VOTFailedInitDB: "VOT: Impossible d'initialiser la base de données",
    VOTDBNeedUpdate:
      "VOT: la Base de données a besoin d'une mise à jour, veuillez recharger la page",
    VOTDisabledForDBUpdating: `VOT est désactivé en raison d'une erreur lors de la mise à jour de la Base de Données. Fermez tous les onglets ouverts avec ${window.location.hostname} et essayez à nouveau`,
    VOTFailedWriteToDB:
      "VOT: Impossible d'écrire les données dans la base de données",
    VOTFailedReadFromDB:
      "VOT: Impossible de récupérer les données de la base de données",
    Russian: "Russe",
    English: "Anglais",
    Chinese: "Chinois",
    French: "Français",
    Italian: "Italien",
    Spanish: "Espagnol",
    German: "Allemand",
    Korean: "Coréen",
    Japanese: "Japonais",
    Arabic: "Arabe",
  },
  it: {
    recommended: "è consigliabile",
    translateVideo: "Traduci il video",
    disableTranslate: "Spegnere",
    translationSettings: "Impostazioni di traduzione",
    resetSettings: "Ripristina impostazioni",
    videoBeingTranslated: "Il video è in fase di traduzione",
    videoLanguage: "Lingua Video",
    translationLanguage: "Lingua di traduzione",
    translationTake: "La traduzione richiederà",
    translationTakeMoreThanHour: "La traduzione richiederà più di un'ora",
    translationTakeAboutMinute: "La traduzione richiederà circa un minuto",
    translationTakeFewMinutes: "La traduzione richiederà alcuni minuti",
    translationTakeApproximatelyMinutes:
      "La traduzione richiederà circa {0} minuti",
    translationTakeApproximatelyMinute:
      "La traduzione richiederà circa {0} minuti",
    unSupportedExtensionError: `Errore! ${GM_info.scriptHandler} non è supportato da questa versione dell'estensione!\n\nUtilizzare la versione cloudflare dell'estensione VOT.`,
    requestTranslationFailed: "Richiesta di traduzione video non riuscita",
    audioNotReceived: "Collegamento audio non ricevuto",
    grantPermissionToAutoPlay:
      "Concedere l'Autorizzazione per la riproduzione automatica",
    neededAdditionalExtension:
      "Per supportare questo sito è necessaria un'estensione aggiuntiva",
    audioFormatNotSupported: "Il formato audio non è supportato",
    VOTAutoTranslate: "Traduci all'apertura",
    VOTDontTranslateYourLang: "Non traducete dalla vostra lingua",
    VOTVolume: "Volume video",
    VOTVolumeTranslation: "Volume di traduzione",
    VOTAutoSetVolume: "Riduci il volume del video al ",
    VOTShowVideoSlider: "Cursore del volume del video",
    VOTSyncVolume: "Collega il volume della traduzione e del video",
    VOTAudioProxy: "Proxy audio ricevuto",
    VOTDisableFromYourLang:
      "VOT: Avete disabilitato la traduzione del video nella vostra lingua",
    VOTLiveNotSupported:
      "VOT: La traduzione dei flussi dal vivo non è supportata",
    VOTPremiere: "VOT: Aspetta che la prima finisca prima di tradurre",
    VOTVideoIsTooLong: "VOT: Il video è troppo lungo",
    VOTNoVideoIDFound: "VOT: ID video non trovato",
    VOTFailedInitDB: "VOT: Impossibile inizializzare il database",
    VOTDBNeedUpdate:
      "VOT: Il database ha bisogno di aggiornamento, si prega di ricaricare la pagina",
    VOTDisabledForDBUpdating: `VOT è disabilitato a causa di un errore durante l'aggiornamento del database. CHIUDI tutte le schede aperte con ${window.location.hostname} e riprova`,
    VOTFailedWriteToDB: "VOT: Impossibile scrivere dati nel database",
    VOTFailedReadFromDB: "VOT: Impossibile recuperare i dati dal database",
    Russian: "Russo",
    English: "Inglese",
    Chinese: "Cinese",
    French: "Francese",
    Italian: "Italiano",
    Spanish: "Spagnolo",
    German: "Tedesco",
    Korean: "Coreano",
    Japanese: "Giapponese",
    Arabic: "Arabo",
  },
  ja: {
    recommended: "おすすめ",
    translateVideo: "動画を翻訳する",
    disableTranslate: "オフにする",
    translationSettings: "翻訳設定",
    resetSettings: "設定をリセットする",
    videoBeingTranslated: "動画が翻訳されています",
    videoLanguage: "動画の言語",
    translationLanguage: "翻訳言語",
    translationTake: "翻訳にかかる時間は",
    translationTakeMoreThanHour: "翻訳には1時間以上かかります",
    translationTakeAboutMinute: "翻訳には約1分かかります",
    translationTakeFewMinutes: "翻訳には数分かかります",
    translationTakeApproximatelyMinutes:
      "翻訳には約{0}分かかります",
    translationTakeApproximatelyMinute:
      "翻訳には約{0}分かかります",
    unSupportedExtensionError: `エラー！ ${GM_info.scriptHandler} はこのバージョンの拡張機能ではサポートされていません！\n\nVOT拡張機能のcloudflareバージョンを使用してください。`,
    requestTranslationFailed: "動画の翻訳リクエストに失敗しました",
    audioNotReceived: "音声リンクが受信されませんでした",
    grantPermissionToAutoPlay: "自動再生の権限を付与する",
    neededAdditionalExtension:
      "このサイトをサポートするために追加の拡張機能が必要です",
    audioFormatNotSupported: "音声形式がサポートされていません",
    VOTAutoTranslate: "開いたときに翻訳する",
    VOTDontTranslateYourLang: "自分の言語からは翻訳しない",
    VOTVolume: "動画の音量",
    VOTVolumeTranslation: "翻訳の音量",
    VOTAutoSetVolume: "動画の音量を ",
    VOTShowVideoSlider: "動画の音量スライダー",
    VOTSyncVolume: "バインド翻訳とビデオボリューム",
    VOTAudioProxy: "プロキシで受信した音声",
    VOTDisableFromYourLang:
      "VOT：あなたの言語での動画の翻訳を無効にしました",
    VOTLiveNotSupported: "VOT：ライブストリームの翻訳はサポートされていません",
    VOTPremiere: "VOT：プレミアが終わるまで待ってから翻訳してください",
    VOTVideoIsTooLong: "VOT：動画が長すぎます",
    VOTNoVideoIDFound: "VOT：動画IDが見つかりませんでした",
    VOTFailedInitDB: "VOT：データベースの初期化に失敗しました",
    VOTDBNeedUpdate:
      "VOT：データベースを更新する必要があります。ページを再読み込みしてください。",
    VOTDisabledForDBUpdating: `データベース更新時のエラーのため、VOTは無効になっています。${window.location.hostname} を開いているすべてのタブを閉じて、もう一度お試しください。`,
    VOTFailedWriteToDB: "VOT：データベースにデータを書き込めませんでした。",
    VOTFailedReadFromDB: "VOT：データベースからデータを取得できませんでした。",
    Russian: "ロシア語",
    English: "英語",
    Chinese: "中国語",
    French: "フランス語",
    Italian: "イタリア語",
    Spanish: "スペイン語",
    German: "ドイツ語",
    Korean: "韓国語",
    Japanese: "日本語",
    Arabic: "アラビア語",
  },
};

export { translateFuncParam, availableLangs, siteTranslates, translations };
