import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// 데코레이터
// app.module.ts 파일은 애플리케이션의 루트 모듈을 정의하는 파일
@Module({
  imports: [],
  // url을 가져오고 함수를 실행하는 컨트롤러
  // express의 라우터 역할
  controllers: [MoviesController],
  // 비즈니스 로직을 담당하는 서비스
  providers: [MoviesService],
})
export class AppModule {}
