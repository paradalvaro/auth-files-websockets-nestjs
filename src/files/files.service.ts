import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  getFileById(id: string) {
    const path = join(__dirname, `../../static/uploads`, id);
    if (!existsSync(path)) {
      throw new BadRequestException('No file found');
    }
    return path;
  }
}
