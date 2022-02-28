#!/usr/bin/env node
const program  = require('commander');
const api = require('./index')
const pkg = require('./package.json')

program
  .version(pkg.version)

program
  .command('add')
  .description('add a taskName')
  .action((...args) => {
    const task = args[args.length -1].args.join(' ')
    api.add(task).then(() => {console.log('添加成功')},() => {console.log('添加失败')})
  });

program
  .command('clear')
  .description('clear all taskName')
  .action(() => {
    api.clear().then(() => {console.log('清除成功')},() => {console.log('清除失败')})
  });

if(process.argv.length === 2){
  api.showAll()
}
program.parse(process.argv)
