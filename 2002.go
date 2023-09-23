package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"strconv"
)

func main() {
    infile := "in"
	url := "https://raw.githubusercontent.com/nuoxoxo/in/main/aoc/2002." + infile

	resp, _ := http.Get(url)
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)

	lines := strings.Split(string(body), "\n")
	lines = lines[:len(lines) - 1]
	var P [][] string

	for _, line := range lines {
		P = append(P, strings.Fields(line))
	}

	res1 := 0
	res2 := 0

	// Part 1

	for _, p := range P {

		temp := strings.Split(p[0], "-")
		min, _ := strconv.Atoi(temp[0])
		max, _ := strconv.Atoi(temp[1])
		c := strings.Split(p[1], ":")[0]
		cnt := 0
		for _, char := range p[2] {
			if string(char) == c {
				cnt++
			}
		}
		if cnt >= min && cnt <= max {
			res1++
		}
	}

	// Part 2

	for _, p := range P {

		temp := strings.Split(p[0], "-")
		L, _ := strconv.Atoi(temp[0])
		R, _ := strconv.Atoi(temp[1])
		c := p[1][0]
        if (p[2][L - 1] == c) != (p[2][R - 1] == c) {
            res2++
        }
	}

	fmt.Println("Part 1:", res1)
	fmt.Println("Part 2:", res2)
}

