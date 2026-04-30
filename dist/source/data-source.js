"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const data_config_1 = require("./data.config");
const dataSource = new typeorm_1.DataSource(data_config_1.DataConfig);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map