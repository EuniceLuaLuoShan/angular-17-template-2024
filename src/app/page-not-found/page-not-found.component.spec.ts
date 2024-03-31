import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';


describe('PageNotFoundComponent', () => {
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let component: PageNotFoundComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        PageNotFoundComponent,
        RouterModule.forRoot(
          [
            { path: 'page-not-found', component: {} as any }
          ]
        )
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
  });

  it('should create the PageNotFoundComponent', () => {
    expect(component).toBeTruthy();
  });
});