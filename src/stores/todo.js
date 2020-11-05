import { observable, action } from 'mobx';
import * as api from '../lib/api';

export default class PostStore {
  @observable.ref todoList = [];
  @observable tagList = []; //Tga 셀렉트에 담을때 사용
  @observable loginToggle = true; // 로그인 창 Toggle
  @observable loginOrLogout = true; // 로그인, 로그아웃 Toggle

  constructor(root) {
    this.root = root;
    this.root.common.subLoading = true;
    this.actTodoList();
    this.actAuthCheck();
  }
  // 읽기
  @action
  actTodoList = async () => {
    try {
      const response = await api.todoList();
      const data = await response.data;

      const tag = data.map((info) => info.tags);
      const tagChoice = Array.from(new Set(tag)).sort();
      this.tagList = tagChoice;
      this.todoList = data;
    } catch (e) {
      console.log('Error: 읽기에 실패했습니다.');
    }
    this.root.common.subLoading = false;
  };
  // 쓰기
  @action
  actTodoWrite = async (inputValue, tagValue) => {
    this.root.common.subLoading = true;
    try {
      await api.authCheck();

      const writeDdata = JSON.stringify({
        subject: inputValue,
        tags: tagValue,
        important: false,
        btnTodo: true,
        btnConfirm: false,
        btnComplete: false,
      });

      try {
        await api.todoWrite(writeDdata);
        await this.actTodoList();
      } catch (e) {
        console.log('Error: 쓰기에 실패했습니다.');
      }
    } catch (e) {
      this.root.common.subLoading = false;
      this.loginToggle = false;
    }
  };
  // 삭제
  @action
  actTodoDelete = async (id) => {
    this.root.common.subLoading = true;
    try {
      await api.authCheck();

      try {
        await api.todoDelete(id);
        await this.actTodoList();
      } catch (e) {
        console.log('Error: 삭제에 실패했습니다.');
      }
    } catch (e) {
      this.root.common.subLoading = false;
      this.loginToggle = false;
    }
  };

  // 코멘트 관련
  // 코멘트 쓰기
  @action
  actTodoPatch = async (id, value) => {
    this.root.common.subLoading = true;
    try {
      await api.authCheck();

      const index = this.todoList.findIndex((info) => info._id === id);
      const selected = this.todoList[index];
      const selectedItem = selected.comments;

      if (!selected) {
      } else {
        let patchDdata = JSON.stringify({
          comments: [...selectedItem, { comment: value }],
        });

        try {
          await api.todoPatch(id, patchDdata).then(this.actTodoList());
        } catch (e) {
          console.log('Error: 코멘트 쓰기에 실패했습니다.');
        }
      }
    } catch (e) {
      this.root.common.subLoading = false;
      this.loginToggle = false;
    }
  };
  // 코멘트 리스트 삭제
  @action
  actSubListPatch = async (id, subId) => {
    this.root.common.subLoading = true;
    try {
      await api.authCheck();

      const index = this.todoList.findIndex((info) => info._id === id);
      const selected = this.todoList[index];
      const selectedItem = selected.comments.findIndex(
        (info) => info._id === subId
      );
      let selectedComments = this.todoList[index].comments;
      selectedComments.splice(selectedItem, 1);

      if (!selected) {
        console.log('잘못 된 데이터입니다.');
      } else {
        let patchDdata = JSON.stringify({
          comments: [...selectedComments],
        });

        try {
          await api.todoPatch(id, patchDdata).then(this.actTodoList());
        } catch (e) {
          console.log('Error: 코멘트 삭제에 실패했습니다.');
        }
      }
    } catch (e) {
      this.root.common.subLoading = false;
      this.loginToggle = false;
    }
  };
  // 코멘트 리스트 수정
  @action
  actCommentPatch = async (value, id, subId) => {
    this.root.common.subLoading = true;
    try {
      await api.authCheck();

      const index = this.todoList.findIndex((info) => info._id === id);
      const list = this.todoList[index].comments;
      const listIndex = list.findIndex((info) => info._id === subId);
      let listObj = list[listIndex];
      listObj.comment = value;

      let patchDdata = JSON.stringify({ comments: list });
      try {
        await api.todoPatch(id, patchDdata).then(this.actTodoList());
      } catch (e) {
        console.log('Error: 코멘트 수정에 실패했습니다.');
      }
    } catch (e) {
      this.root.common.subLoading = false;
      this.loginToggle = false;
    }
  };

  // 중요 체크
  @action
  actImportantCheck = async (id) => {
    this.root.common.subLoading = true;
    try {
      await api.authCheck();

      const index = this.todoList.findIndex((info) => info._id === id);
      const list = this.todoList[index];
      list.important = !list.important;

      try {
        await api.todoPatch(id, list).then(this.actTodoList());
      } catch (e) {
        console.log('Error: 중요체크 수정에 실패했습니다.');
      }
    } catch (e) {
      this.root.common.subLoading = false;
      this.loginToggle = false;
    }
  };

  // '할일' 목록으로 넘기기
  @action
  actTodo = async (id) => {
    this.root.common.subLoading = true;
    try {
      await api.authCheck();

      const index = this.todoList.findIndex((info) => info._id === id);
      const list = this.todoList[index];
      list.btnTodo = true;
      list.btnConfirm = false;
      list.btnComplete = false;

      try {
        await api.todoPatch(id, list);
        await this.actTodoList();
      } catch (e) {
        console.log('Error: 할일 목록 수정에 실패했습니다.');
      }
    } catch (e) {
      this.root.common.subLoading = false;
      this.loginToggle = false;
    }
  };
  // '확인' 목록으로 넘기기
  @action
  actConfirm = async (id) => {
    this.root.common.subLoading = true;
    try {
      await api.authCheck();

      const index = this.todoList.findIndex((info) => info._id === id);
      const list = this.todoList[index];
      list.btnTodo = false;
      list.btnConfirm = true;
      list.btnComplete = false;

      try {
        await api.todoPatch(id, list);
        await this.actTodoList();
      } catch (e) {
        console.log('Error: 확인 목록 수정에 실패했습니다.');
      }
    } catch (e) {
      this.root.common.subLoading = false;
      this.loginToggle = false;
    }
  };
  // '완료' 목록으로 넘기기
  @action
  actComplete = async (id) => {
    this.root.common.subLoading = true;
    try {
      await api.authCheck();

      const index = this.todoList.findIndex((info) => info._id === id);
      const list = this.todoList[index];
      list.btnTodo = false;
      list.btnConfirm = false;
      list.btnComplete = true;
      list.completeDate = new Date().toISOString();

      try {
        await api.todoPatch(id, list);
        await this.actTodoList();
      } catch (e) {
        console.log('Error: 완료 목록 수정에 실패했습니다.');
      }
    } catch (e) {
      this.root.common.subLoading = false;
      this.loginToggle = false;
    }
  };

  // 로그인
  @action
  actAuthLogin = async (id, password) => {
    const loginData = JSON.stringify({
      username: id,
      password: password,
    });

    try {
      await api.authLogin(loginData);
      this.loginToggle = true;
      this.loginOrLogout = false;
    } catch (e) {
      console.log('Error: 로그인에 실패했습니다.');
      return false;
    }
  };
  // 로그인 체크
  @action
  actAuthCheck = async () => {
    try {
      await api.authCheck();
      this.loginOrLogout = false;
    } catch (e) {
      console.log('Error: 로그인 체크에 실패했습니다.');
    }
  };
  // 로그아웃
  @action
  actAuthLogout = async () => {
    try {
      await api.actAuthLogout();
      this.loginOrLogout = true;
    } catch (e) {
      console.log('Error: 로그아웃에 실패했습니다.');
    }
  };
  // 로그인창 닫기
  @action
  actAuthClose = () => {
    this.loginToggle = !this.loginToggle;
  };
}
