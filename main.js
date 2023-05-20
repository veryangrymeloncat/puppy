// ������ ����� ������� h1
const header = document.createElement('h1');

// ��������� ����� � ��������� h1
header.textContent = 'Hello World';

// ������� ��� �������� �� ��������, ����� ��������� h1
while (document.body.firstChild) {
  if (document.body.firstChild === header) {
    // ��������� ������� � ���������� h1 ����������
    break;
  }
  
  // ������� ��� ��������� ��������
  document.body.removeChild(document.body.firstChild);
}

// ��������� ����� ������� h1 �� ��������
document.body.appendChild(header);

// ������� ������ ��� ��������
document.body.style.backgroundColor = 'transparent';