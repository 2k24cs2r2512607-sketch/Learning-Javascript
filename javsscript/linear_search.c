#include<stdio.h>
void main(){
    int size;
    printf("Enter size ");
    scanf("%d",&size);
    int arr[size];
    printf("enter elements in the array ");
    for(int i=0;i<size;i++){
        scanf("%d",&arr[i]);
    }
    for(int i=0;i<size;i++){
        printf("%d\n ",arr[i]);
    }
    
}
