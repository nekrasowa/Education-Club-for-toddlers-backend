import { Injectable } from '@nestjs/common';
import { TParentsComment } from '../types/aboutTypes';


@Injectable()
export class AboutService {
  getParentsComments(): TParentsComment[] {
    return [
      {
        commentText:
          'We are very happy with this art center — our child has become more interested in drawing and always looks forward to classes.',
        parentName: 'Mike’s mom',
      },
      {
        commentText:
          'Great teachers, we especially like the individual approach and how they support children’s ideas.',
        parentName: 'Shelley’s dad',
      },
      {
        commentText:
          'We can clearly see great progress in our son’s creativity; the lessons are always engaging and friendly.',
        parentName: 'Lindsay’s dad',
      },
      {
        commentText:
          'An excellent place for a child’s development — after every class, he brings home new and beautiful artworks.',
        parentName: 'Billy Robin',
      },
    ];
  }
}
