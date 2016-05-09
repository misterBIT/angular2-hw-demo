import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { LearnNgcliAppComponent } from '../app/learn-ngcli.component';

beforeEachProviders(() => [LearnNgcliAppComponent]);

describe('App: LearnNgcli', () => {
  it('should create the app',
      inject([LearnNgcliAppComponent], (app: LearnNgcliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'learn-ngcli works!\'',
      inject([LearnNgcliAppComponent], (app: LearnNgcliAppComponent) => {
    expect(app.title).toEqual('learn-ngcli works!');
  }));
});
