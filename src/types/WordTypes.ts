export interface FetchReponse {
    word: string;
    phonetic: string;
    phonetics: phonetics[];
    meanings: meaning[];
    sourceUrls: string[];
}

export interface meaning {
    partOfSpeech: string;
    definitions: definitions[];
    synonyms: string[];
    antonyms: string[];
}

export interface definitions {
    definition: string;
    synonyms: string[];
    example: string;
    antonyms: string[];
}

export interface phonetics {
    text: string;
    audio: string;
}
