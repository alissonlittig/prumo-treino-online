import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const file = new URL('../dist/index.html', import.meta.url);

test('build gerou index.html', () => assert.ok(existsSync(file), 'rode npm run build antes'));

const html = existsSync(file) ? readFileSync(file, 'utf8') : '';

test('metadados básicos', () => {
  assert.match(html, /<html lang="pt-BR"/);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /name="viewport"/);
});

test('três planos e FAQ presentes', () => {
  assert.equal((html.match(/class="plan[ "]/g) || []).length, 3);
  assert.ok((html.match(/<details/g) || []).length >= 4);
});

test('aviso de dados fictícios', () => assert.match(html, /fictícios/));

test('sem e-mail real exposto', () => assert.doesNotMatch(html, /@gmail|@hotmail/));
