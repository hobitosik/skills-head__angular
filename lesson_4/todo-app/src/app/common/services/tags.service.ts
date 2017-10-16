import { Injectable } from '@angular/core';

export interface ITag {
  key1: string;
  key2: string;
  key3: string;
}

@Injectable()
export class TagsService {

  private tagsArr: Array<ITag> = [];

  constructor() {
    // this.getTags();
  }

  public getTags(): Promise<ITag> {
    return new Promise((resolve) => {
      fetch('http://localhost:4200/assets/resources/tags.json')
        .then((response) => {
          return response.json()
            .then((
              data: { tags: ITag[] }
            ) => {
              // console.log(data.tags);
              return data.tags;
            });
        })
        .then((tags: ITag[]) => {
          this.tagsArr = tags;
          return this.tagsArr;
        })
        .catch(error => {
          console.log('Fetch Error:', error);
          return null;
        });
    });
  }

}
