<!doctype html>
<html lang="en">

<head>
  <link rel="stylesheet"  href="style.css">
    <title>Hello, world!</title>
</head>

<body>
  HTMLソース
  <form action="cgi-bin/formmail.cgi" method="post">
  <p>
කෙටි නම：<input type="text" name="name" size="40">
  </p>
  <p>
  හිරගනා වලින් කෙටි නම：<input type="text" name="name" size="40">
  </p>
  <p>උපන් දිනය</p>
  <p>year
<input type="text" name="year" size="40">
  </p>
  <p>Month
<input type="text" name="month" size="40">
  </p>
  <p>Day
<input type="text" name="day" size="40">
  </p>
  <p>
ස්ත්රී පුරුෂ භාවය：<input type="radio" name="sex" value="male">පිරිමි

  <input type="radio" name="sex" value="female">ගැහැණු
  </p>
  <p>
දුරකථන：<input type="text" name="name" size="40">
  </p>
  <p>රැකියාව
  <select>
<option>කරුණාකර තෝරන්න</option>
<option value="01">උසස් පාසැල</option>
<option value="02">විශ්ව විද්‍යාල ශිෂ්‍යයා</option>
<option value="03">උපාධිධාරියෙක්</option>
<option value="04">කණිෂ්ඨ විශ්ව විද්‍යාල ශිෂ්‍යයා</option>
<option value="05">වෘත්තීය පාසල</option>
<option value="06">අර්ධකාලීන රැකියාව</option>
<option value="07">නිත්‍ය සේවකයෙක්</option>
<option value="08">කොන්ත්‍රාත් සේවකයින්</option>
<option value="09">ගෘහණියන්</option>
<option value="10">රැකියා විරහිත</option>
<option value="11">වෙනත්</option>

  </select>
  </p>
  <p>
විද්යුත් තැපෑල：<input type="text" name="name" size="40">
  </p>


  <p>
  <input type="submit" value="送信"><input type="reset" value="リセット">
  </p>
  </form>

</body>

</html>
