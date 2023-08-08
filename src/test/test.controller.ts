import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @MessagePattern('create_test')
  create(@Payload() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }
}
