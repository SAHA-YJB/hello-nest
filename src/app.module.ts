import { Module } from '@nestjs/common';

// 데코레이터
// app.module.ts 파일은 애플리케이션의 루트 모듈을 정의하는 파일
@Module({
  imports: [],
  // url을 가져오고 함수를 실행하는 컨트롤러
  // express의 라우터 역할
  controllers: [],
  providers: [],
})
export class AppModule {}
