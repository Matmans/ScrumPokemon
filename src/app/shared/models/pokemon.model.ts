import { identifierModuleUrl } from '@angular/compiler';
import {Types} from './types.model';

export class Pokemon {
    constructor (
        public id: number,
        public name: string,
        public url: string,
        public types: Types,
        public weight: string,
        public height: string,
        public base_experience: string,
    ) {}
}