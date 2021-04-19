import {Observable} from 'rxjs';
import {PostEffects} from './post.effects';
import {PostService} from '../../user/shared/services/post.service';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {PostActions} from '../actions/post.action';
import {cold} from 'jest-marbles';

describe('ResortEffects', () => {
  let actions: Observable<any>;
  let effects: PostEffects;
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostEffects,
        {
          provide: PostService,
          useValue: {}
        },
        provideMockActions(() => actions)
      ]
    });
    // @ts-ignore
    actions = TestBed.inject(PostActions);
    effects = TestBed.inject(PostEffects);
    service = TestBed.inject(PostService);
  });

  describe('getPost', () => {
    it('should dispatch GetPostSuccess', () => {



      expect(effects.getPost$).toBeObservable(cold('(a|)', { a: actions }));
    });
  });
});
