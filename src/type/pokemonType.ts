/*ポケモンデータの型定義をするファイル*/
import { CONSTANTS } from "../const/appConst.js";

//https://pokeapi.co/api/v2/pokemonから取得できる全件データの型定義
export type AllPokemonDataType = {
  count: number;
  next: string;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

//各ポケモンの詳細データの型定義
//使いそうなもののみコメントで説明
export type PokemonType = {
  //技
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];

  //倒したときに得られる経験値
  base_experience: number;

  //鳴き声
  cries: {
    latest: string;
    legacy: string;
  };

  forms: {
    name: string;
    url: string;
  }[];

  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];

  height: number;

  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];

  id: number;

  is_default: boolean;

  location_area_encounters: string;

  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];

  name: string;

  order: number;

  past_abities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
    generation: {
      name: string;
      url: string;
    };
  }[];

  //構成が謎なのでとりあえずany型で
  past_types: any[];

  species: {
    name: string;
    url: string;
  };

  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string | null;
      };
      showdown: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    versions: {
      generation_i: {
        "red-blue": {
          back_default: string | null;
          back_gray: string | null;
          back_transparent: string | null;
          front_default: string | null;
          front_gray: string | null;
          front_transparent: string | null;
        };
        yellow: {
          back_default: string | null;
          back_gray: string | null;
          back_transparent: string | null;
          front_default: string | null;
          front_gray: string | null;
          front_transparent: string | null;
        };
      };
      generation_ii: {
        crystal: {
          back_default: string | null;
          back_shiny: string | null;
          back_transparent: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
        gold: {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
        silver: {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
      };
      generation_iii: {
        emerald: {
          front_default: string | null;
          front_shiny: string | null;
        };
        "firered-leafgreen": {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
        "ruby-sapphire": {
          back_default: string | null;
          back_shiny: string | null;
          front_default: string | null;
          front_shiny: string | null;
        };
      };
      generation_iv: {
        "diamond-pearl": {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        "heartgold-soulsilver": {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        platinum: {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      generation_v: {
        "black-white": {
          animated: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
          };
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      generation_vi: {
        "omegaruby-alphasapphire": {
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        "x-y": {
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      generation_vii: {
        icons: {
          front_default: string | null;
          front_female: string | null;
        };
        "ultra-sun-ultra-moon": {
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
      };
      generation_viii: {
        icons: {
          front_default: string | null;
          front_female: string | null;
        };
      };
    };
  };

  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];

  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];

  weight: number;
};

export type JpEnNameType = {
  englishName: string;
  japaneseName: string;
};

//JSON ファイルの型定義
export type JpEnNameDataType = {
  pokemonNames: Record<string, string>;
  typeNames: Record<string, string>;
  abilityNames: Record<string, string>;
};

//jpEnNameのプロパティ名の型定義
export type jpEnNameProperty =
  | typeof CONSTANTS.JSONPROPERTIES.POKEMON_NAME //pokemonNames
  | typeof CONSTANTS.JSONPROPERTIES.TYPE_NAME //typeNames
  | typeof CONSTANTS.JSONPROPERTIES.ABILITY_NAME //abilityNames
  | typeof CONSTANTS.JSONPROPERTIES.SKILL_NAME; //skillNames
