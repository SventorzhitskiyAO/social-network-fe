import { PostService } from './post.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {Observable, of} from 'rxjs';
import {cold} from 'jest-marbles';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [PostService]
    }).compileComponents().then(() => {
      service = TestBed.inject(PostService);
    });
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  describe('getPost', () => {
    const result = [{id: 'test'}];

    it('should call get method', () => {
      spyOn(service['http'], 'get');
      service.getPost('1');
      expect(service['http'].get).toHaveBeenCalledWith('http://localhost:3000/post/1');
    });

    it('should return objects array when call get method', () => {
      jest.spyOn(service['http'], 'get').mockImplementation(() => of(result));
      const getPost: Observable<any> = service.getPost('1');

      expect(getPost).toBeObservable(cold('(a|)', {a: result}));
    });
  });

  describe('crete', () => {
    it('should call post method ', () => {
      spyOn(service['http'], 'post');
      service.create({id: 'test'});
      expect(service['http'].post).toHaveBeenCalledWith('http://localhost:3000/post/', {id: 'test'});
    });

    it('should return objects array when call post method', () => {
      jest.spyOn(service['http'], 'post').mockImplementation(() => of({id: 'test'}));
      const createPost: Observable<any> = service.create({id: 'test'});
      expect(createPost).toBeObservable(cold('(a|)',  {a: {id: 'test'}}));
    });
  });

  describe('delete', () => {
    it('should call delete method ', () => {
      spyOn(service['http'], 'delete');
      service.delete('1');
      expect(service['http'].delete).toHaveBeenCalledWith('http://localhost:3000/post/1');
    });

    it('should return delete object when call delete method', () => {
      jest.spyOn(service['http'], 'delete').mockImplementation(() => of({id: 'test'}));
      const deletePost: Observable<any> = service.delete('1');

      expect(deletePost).toBeObservable(cold('(a|)',  {a: {id: 'test'}}));
    });

  });
});
