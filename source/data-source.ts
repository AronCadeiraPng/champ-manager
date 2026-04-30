// src/database/data-source.ts
import { DataSource } from 'typeorm'
import { DataConfig } from './data.config'

const dataSource = new DataSource(DataConfig);

export default dataSource;