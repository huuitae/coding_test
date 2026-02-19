/**
 * Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's 
 * and all the 1's in these substrings are grouped consecutively.
 * Substrings that occur multiple times are counted the number of times they occur.

Example 1:

Input: s = "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

Example 2:

Input: s = "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.

Constraints:

1 <= s.length <= 105
s[i] is either '0' or '1'.

0과 1의 개수가 같으면서 0과 1이 연속으로 나타나는 부분 문자열의 개수를 구하는 문제.
핵심 공식: 인접한 두 문자열 덩어리에서 만들어낼 수 있는 부분 문자열의 개수는 Math.min(앞 덩어리의 길이, 뒤 덩어리의 길이) 와 같다.
 */

var countBinarySubstrings = function (s) {
  let answer = 0;
  let prevLength = 0;
  let currLength = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      currLength++;
    } else {
      answer += Math.min(prevLength, currLength);
      prevLength = currLength;
      currLength = 1;
    }
  }

  answer += Math.min(prevLength, currLength);

  return answer;
};
