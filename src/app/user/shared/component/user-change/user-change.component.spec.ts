import {UserChangeComponent} from './user-change.component';

describe('UserChangeComponent', () => {
  let component: UserChangeComponent;
  const user = {
    _id: '',
    firstName: 'test',
    secondName: 'test',
    login: 'test',
    email: 'test',
    facebook: 'test',
    vk: 'test',
    github: 'test',
    instagram: 'test',
    skill: 'test',
    aboutMe: 'test',
    password: '',
    passwordConfirm: '',
  };
  const result = {
    id: '',
    firstName: 'test',
    secondName: 'test',
    login: 'test',
    email: 'test',
    facebook: 'test',
    vk: 'test',
    github: 'test',
    instagram: 'test',
    skill: 'test',
    aboutMe: 'test',
    password: '',
    passwordConfirm: '',
  };

  beforeEach(() => {
    component = new UserChangeComponent();
    component.user = user;
  });

  describe('Setup component', () => {
    it('should be defined', () => {
      expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
      it('should call generatePostForm', () => {
        const generatePostFormSpy = jest.spyOn(component, 'generateChangeForm');
        component.ngOnInit();
        expect(generatePostFormSpy).toBeCalledWith(user);
      });
    });
  });

  describe('generatePostForm', () => {
    it('should generate form with passed values', () => {
      component.generateChangeForm(user);
      component.myForm.value.id = user._id;
      expect(component.myForm.value).toEqual(result);
    });
  });

  describe('submit', () => {
    beforeEach(() => {
      component.generateChangeForm(user);
    });

    it('raises the selected event when clicked', () => {
      component.submitUpdate.subscribe(u => expect(u).toEqual(user));
      component.submit();
    });

    it('should call emit method with value', () => {
      const submitSpy = jest.spyOn(component.submitUpdate, 'emit');
      component.submit();
      expect(submitSpy).toHaveBeenCalledWith(result);
    });

    it('user.id should equal myForm.value.id', () => {
      component.submit();
      expect(component.myForm.value.id).toBe(user._id);
    });
  });
});
