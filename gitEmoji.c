#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#define MAXLEN 1000
char* getRandomEmoji() {
    char* emoji = ":bowtie:";
    return emoji;
}
char* concatArgs(int argc, char** args) {
    int i = 0;
    char* result = malloc(MAXLEN);
    int pos = 0;
    for (i = 0; i < argc; i++) {
        strcat(result, args[i]);
        strcat(result, " ");
    }
    return result;
}
int main(int argc, char** argv) {
    if (strcmp(argv[1], "commit") == 0) {
        char* commitMsg = malloc(MAXLEN * sizeof(char*));
        char* curMsg = argv[3];
        char* randomEmoji = getRandomEmoji();
        strcat(commitMsg, "\"");
        strcat(commitMsg, randomEmoji);
        strcat(commitMsg, curMsg);
        strcat(commitMsg, "\"");
        argv[3] = commitMsg;
    }   
    argv[0] = "gittemp";
    char* concatCmd = concatArgs(argc, argv);
    system(concatCmd);
}

