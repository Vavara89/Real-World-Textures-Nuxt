import keysToCamel from '~/classes/keysToCamel';


export default class TexturesClass {
  id: number | null = null;
  name: string | null = null;
  cover: string | null = null;
  is_bookmarked: boolean | null = false;
  is_free: boolean | null = false;
  credits: number | null = null;
  gallery: Array<Object> | null = [];
  slug: string | null = null;
  in_assets: boolean | null = null;

  constructor (data: any) {
    if (data) {
      Object.assign(this, keysToCamel(data));
    }
  }
}
